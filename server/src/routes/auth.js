import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { query } from '../db.js'

const router = Router()

router.get('/me', async (req, res) => {
  if (!req.session?.userId) {
    return res.json({ user: null })
  }

  const result = await query(
    'SELECT id, name, email FROM users WHERE id = $1',
    [req.session.userId]
  )
  return res.json({ user: result.rows[0] || null })
})

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  const existing = await query('SELECT id FROM users WHERE email = $1', [email])
  if (existing.rows.length > 0) {
    return res.status(409).json({ message: 'Email already registered' })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const result = await query(
    'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email',
    [name, email, passwordHash]
  )

  req.session.userId = result.rows[0].id
  return res.json({ user: result.rows[0] })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  const result = await query(
    'SELECT id, name, email, password_hash FROM users WHERE email = $1',
    [email]
  )
  const user = result.rows[0]
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const match = await bcrypt.compare(password, user.password_hash)
  if (!match) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  req.session.userId = user.id
  return res.json({ user: { id: user.id, name: user.name, email: user.email } })
})

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('tm_session')
    res.json({ ok: true })
  })
})

export default router
