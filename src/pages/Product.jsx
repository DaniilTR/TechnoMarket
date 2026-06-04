import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../api/client'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Product() {
  const { slug } = useParams()
  const { addItem } = useCart()
  const { user } = useAuth()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    apiGet(`/products/${slug}`)
      .then((data) => setProduct(data.product))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return <main className="section"><div className="container">Loading...</div></main>
  }

  if (error) {
    return <main className="section"><div className="container error">{error}</div></main>
  }

  if (!product) {
    return <main className="section"><div className="container">Not found.</div></main>
  }

  return (
    <main className="section">
      <div className="container product-page">
        <div className="product-page__media">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-page__info">
          <p className="eyebrow">{product.category}</p>
          <h2>{product.name}</h2>
          <p className="lead">{product.description}</p>
          <div className="product-page__price">${product.price}</div>
          <div className="product-page__actions">
            <button className="btn btn--primary" onClick={() => addItem(product, 1)}>
              Add to cart
            </button>
            {!user && (
              <span className="hint">Sign in to sync your cart across devices.</span>
            )}
          </div>
          <div className="specs">
            <h4>Specs</h4>
            <ul>
              {Object.entries(product.specs || {}).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
