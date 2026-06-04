import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="section">
      <div className="container empty">
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link className="btn btn--primary" to="/">Back to home</Link>
      </div>
    </main>
  )
}
