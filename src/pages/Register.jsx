import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const { register, error, setError } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await register(form)
      navigate('/catalog')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <main className="section">
      <div className="container auth">
        <h2>Create account</h2>
        <p>Save builds, track orders, and sync carts.</p>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              required
            />
          </label>
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
          <button className="btn btn--primary" type="submit">Create account</button>
        </form>
        <p className="hint">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </main>
  )
}
