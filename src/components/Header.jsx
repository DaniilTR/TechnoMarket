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
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/bundles">Build Kits</NavLink>
          <NavLink to="/support">Support</NavLink>
          <NavLink to="/cart">Cart ({count})</NavLink>
        </nav>
        <div className="header__actions">
          {user ? (
            <>
              <span className="header__user">Hi, {user.name}</span>
              <button className="btn btn--ghost" onClick={logout}>Log out</button>
            </>
          ) : (
            <Link className="btn btn--primary" to="/login">Sign in</Link>
          )}
        </div>
      </div>
    </header>
  )
}
