import { Router } from 'express'
import { query } from '../db.js'
import { requireUser } from '../middleware/auth.js'

const router = Router()

async function getCart(userId) {
  const result = await query(
    `SELECT ci.id, ci.product_id AS "productId", ci.quantity,
            p.name, p.price, p.image, p.slug
     FROM cart_items ci
     JOIN products p ON p.id = ci.product_id
     WHERE ci.user_id = $1
     ORDER BY ci.id DESC`,
    [userId]
  )

  const items = result.rows.map((row) => ({
    id: row.id,
    productId: row.productId,
    quantity: row.quantity,
    product: {
      id: row.productId,
      name: row.name,
      price: row.price,
      image: row.image,
      slug: row.slug,
    },
  }))

  return items
}

router.use(requireUser)

router.get('/', async (req, res) => {
  const items = await getCart(req.session.userId)
  res.json({ items })
})

router.post('/items', async (req, res) => {
  const { productId, quantity } = req.body
  if (!productId || !quantity) {
    return res.status(400).json({ message: 'Не указаны обязательные поля' })
  }

  await query(
    `INSERT INTO cart_items (user_id, product_id, quantity)
     VALUES ($1, $2, $3)
     ON CONFLICT (user_id, product_id)
     DO UPDATE SET quantity = cart_items.quantity + EXCLUDED.quantity`,
    [req.session.userId, productId, quantity]
  )

  const items = await getCart(req.session.userId)
  return res.json({ items })
})

router.patch('/items/:id', async (req, res) => {
  const { quantity } = req.body
  const itemId = Number(req.params.id)
  if (!quantity || Number.isNaN(itemId)) {
    return res.status(400).json({ message: 'Неверный запрос' })
  }

  if (quantity <= 0) {
    await query('DELETE FROM cart_items WHERE id = $1 AND user_id = $2', [
      itemId,
      req.session.userId,
    ])
  } else {
    await query(
      'UPDATE cart_items SET quantity = $1 WHERE id = $2 AND user_id = $3',
      [quantity, itemId, req.session.userId]
    )
  }

  const items = await getCart(req.session.userId)
  return res.json({ items })
})

router.delete('/items/:id', async (req, res) => {
  const itemId = Number(req.params.id)
  await query('DELETE FROM cart_items WHERE id = $1 AND user_id = $2', [
    itemId,
    req.session.userId,
  ])
  const items = await getCart(req.session.userId)
  return res.json({ items })
})

router.delete('/', async (req, res) => {
  await query('DELETE FROM cart_items WHERE user_id = $1', [req.session.userId])
  res.json({ items: [] })
})

export default router
