# TechnoMarket
Full-stack demo store for PC components.

## Stack
- Frontend: React + Vite + React Router
- Backend: Node.js + Express + PostgreSQL
- Auth: session cookies

## Frontend setup
```bash
npm install
npm run dev
```
The app runs on `http://localhost:5173`.

## Backend setup
```bash
cd server
npm install
cp .env.example .env
```

Create a PostgreSQL database (example name: `technomarket`). Then run the SQL files:
```bash
psql "$DATABASE_URL" -f sql/schema.sql
psql "$DATABASE_URL" -f sql/seed.sql
```

Start the API server:
```bash
npm run dev
```
The API runs on `http://localhost:3001`.

## Environment variables
See [server/.env.example](server/.env.example) for required values:
- `DATABASE_URL`
- `SESSION_SECRET`
- `PORT`
- `CLIENT_ORIGIN`

## Routes
Frontend:
- `/` home
- `/catalog` catalog
- `/product/:slug` product details
- `/cart` cart
- `/login` and `/register` auth

Backend:
- `GET /api/products`
- `GET /api/products/:slug`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `GET /api/cart`
- `POST /api/cart/items`
- `PATCH /api/cart/items/:id`
- `DELETE /api/cart/items/:id`
- `DELETE /api/cart`