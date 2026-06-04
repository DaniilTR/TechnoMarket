import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="section">
      <div className="container empty">
        <h2>Страница не найдена</h2>
        <p>Запрашиваемая страница не существует.</p>
        <Link className="btn btn--primary" to="/">На главную</Link>
      </div>
    </main>
  )
}
