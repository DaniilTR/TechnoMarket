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
        <h2>Вход</h2>
        <p>Добро пожаловать. Доступ к корзине и сохранённым сборкам.</p>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Электронная почта
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              required
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
              required
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button className="btn btn--primary" type="submit">Войти</button>
        </form>
        <p className="hint">
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </p>
      </div>
    </main>
  )
}
