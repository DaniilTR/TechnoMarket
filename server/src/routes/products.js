import { Router } from 'express'
import { query } from '../db.js'

const router = Router()

router.get('/', async (req, res) => {
  const result = await query(
    `SELECT id, slug, name, short_description AS "shortDescription", description,
            price, stock, image, category, specs
     FROM products
     ORDER BY id DESC`
  )
  res.json({ products: result.rows })
})

router.get('/:slug', async (req, res) => {
  const result = await query(
    `SELECT id, slug, name, short_description AS "shortDescription", description,
            price, stock, image, category, specs
     FROM products
     WHERE slug = $1`,
    [req.params.slug]
  )

  const product = result.rows[0]
  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }

  return res.json({ product })
})

export default router
