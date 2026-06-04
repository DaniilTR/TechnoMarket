import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { apiDelete, apiGet, apiPatch, apiPost } from '../api/client'
import { useAuth } from './AuthContext'

const CartContext = createContext(null)
const LOCAL_KEY = 'tm_cart'

function readLocalCart() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeLocalCart(items) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(items))
}

export function CartProvider({ children }) {
  const { user } = useAuth()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const loadCart = async () => {
    if (user) {
      const data = await apiGet('/cart')
      setItems(data.items)
    } else {
      setItems(readLocalCart())
    }
    setLoading(false)
  }

  useEffect(() => {
    loadCart().catch(() => setLoading(false))
  }, [user])

  useEffect(() => {
    if (!user) {
      writeLocalCart(items)
    }
  }, [items, user])

  const mergeLocalToServer = async () => {
    if (!user) return
    const localItems = readLocalCart()
    if (localItems.length === 0) return

    for (const item of localItems) {
      await apiPost('/cart/items', {
        productId: item.productId,
        quantity: item.quantity,
      })
    }

    localStorage.removeItem(LOCAL_KEY)
    const data = await apiGet('/cart')
    setItems(data.items)
  }

  useEffect(() => {
    if (user) {
      mergeLocalToServer().catch(() => null)
    }
  }, [user])

  const addItem = async (product, quantity = 1) => {
    if (user) {
      const data = await apiPost('/cart/items', {
        productId: product.id,
        quantity,
      })
      setItems(data.items)
      return
    }

    setItems((prev) => {
      const existing = prev.find((item) => item.productId === product.id)
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...prev,
        {
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
        },
      ]
    })
  }

  const updateQuantity = async (itemId, quantity) => {
    if (user) {
      const data = await apiPatch(`/cart/items/${itemId}`, { quantity })
      setItems(data.items)
      return
    }

    setItems((prev) =>
      prev.map((item) =>
        item.productId === itemId ? { ...item, quantity } : item
      )
    )
  }

  const removeItem = async (itemId) => {
    if (user) {
      const data = await apiDelete(`/cart/items/${itemId}`)
      setItems(data.items)
      return
    }

    setItems((prev) => prev.filter((item) => item.productId !== itemId))
  }

  const clearCart = async () => {
    if (user) {
      await apiDelete('/cart')
      setItems([])
      return
    }
    setItems([])
  }

  const total = useMemo(
    () =>
      items.reduce((sum, item) => {
        const price = item.product?.price ?? item.price ?? 0
        return sum + price * item.quantity
      }, 0),
    [items]
  )

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )

  const value = useMemo(
    () => ({ items, loading, total, count, addItem, updateQuantity, removeItem, clearCart }),
    [items, loading, total, count]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
