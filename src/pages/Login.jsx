import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login, error, setError } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await login(form)
      navigate('/catalog')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <main className="section">
      <div className="container auth">
        <h2>Sign in</h2>
        <p>Welcome back. Access your cart and saved builds.</p>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
              required
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button className="btn btn--primary" type="submit">Sign in</button>
        </form>
        <p className="hint">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </main>
  )
}
