# TechnoMarket
Демо-магазин комплектующих (Full-stack).

## Стек
- Фронтенд: React + Vite + React Router
- Бэкенд: Node.js + Express + PostgreSQL
- Аутентификация: сессии (cookie)

## Запуск фронтенда
В корне проекта:
```bash
npm install
npm run dev
```
Фронтенд доступен по `http://localhost:5173`.

## Запуск бэкенда
```bash
cd server
npm install
cp .env.example .env
```

Создайте базу PostgreSQL (например `technomarket`), затем примените схему и сиды:
```bash
psql "$DATABASE_URL" -f sql/schema.sql
psql "$DATABASE_URL" -f sql/seed.sql
```

Запустите сервер API:
```bash
npm run dev
```
API по умолчанию на `http://localhost:3001`.

## .env
Скопируйте и заполните `server/.env.example`:
- `DATABASE_URL`
- `SESSION_SECRET`
- `PORT`
- `CLIENT_ORIGIN`

## Маршруты
Фронтенд:
- `/` — главная
- `/catalog` — каталог
- `/product/:slug` — карточка товара
- `/cart` — корзина
- `/login` и `/register` — вход/регистрация

Бэкенд API:
- `GET /api/products`
- `GET /api/products/:slug`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `GET /api/cart` (только для авторизованных)
- `POST /api/cart/items`
- `PATCH /api/cart/items/:id`
- `DELETE /api/cart/items/:id`
- `DELETE /api/cart`