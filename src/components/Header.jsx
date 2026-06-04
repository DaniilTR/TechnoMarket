import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { user, logout } = useAuth()
  const { count } = useCart()

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Link to="/" className="brand">
          <span className="brand__mark">TM</span>
          <span>TechnoMarket</span>
        </Link>
        <nav className="nav">
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="/bundles">Наборы</NavLink>
          <NavLink to="/support">Поддержка</NavLink>
          <NavLink to="/cart">Корзина ({count})</NavLink>
        </nav>
        <div className="header__actions">
          {user ? (
            <>
              <span className="header__user">Привет, {user.name}</span>
              <button className="btn btn--ghost" onClick={logout}>Выйти</button>
            </>
          ) : (
            <Link className="btn btn--primary" to="/login">Войти</Link>
          )}
        </div>
      </div>
    </header>
  )
}
