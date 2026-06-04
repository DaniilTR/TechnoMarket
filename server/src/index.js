import express from 'express'
import session from 'express-session'
import connectPgSimple from 'connect-pg-simple'
import cors from 'cors'
import dotenv from 'dotenv'
import { pool } from './db.js'
import authRoutes from './routes/auth.js'
import productRoutes from './routes/products.js'
import cartRoutes from './routes/cart.js'

dotenv.config()

const app = express()
const PgSession = connectPgSimple(session)
const port = process.env.PORT || 3001

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
)
app.use(express.json())

app.use(
  session({
    store: new PgSession({ pool, tableName: 'user_sessions' }),
    name: 'tm_session',
    secret: process.env.SESSION_SECRET || 'dev_secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
)

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ message: 'Server error' })
  next()
})

app.listen(port, () => {
  console.log(`API listening on ${port}`)
})
