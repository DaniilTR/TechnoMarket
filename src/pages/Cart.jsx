import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart()

  return (
    <main className="section">
      <div className="container cart">
        <div className="section__head">
          <h2>Your cart</h2>
          <p>Review items before checkout.</p>
        </div>
        {items.length === 0 ? (
          <div className="empty">
            <p>Your cart is empty.</p>
            <Link className="btn btn--primary" to="/catalog">Browse catalog</Link>
          </div>
        ) : (
          <div className="cart__grid">
            <div className="cart__items">
              {items.map((item) => {
                const product = item.product || item
                return (
                  <div key={item.id || item.productId} className="cart-item">
                    <img src={product.image} alt={product.name} />
                    <div>
                      <h4>{product.name}</h4>
                      <p>${product.price}</p>
                    </div>
                    <div className="cart-item__qty">
                      <button onClick={() => updateQuantity(item.id || item.productId, Math.max(1, item.quantity - 1))}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id || item.productId, item.quantity + 1)}>+</button>
                    </div>
                    <button className="link" onClick={() => removeItem(item.id || item.productId)}>Remove</button>
                  </div>
                )
              })}
            </div>
            <div className="cart__summary">
              <h3>Summary</h3>
              <div className="summary__row">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <Link className="btn btn--primary" to="/checkout">Checkout</Link>
              <button className="btn btn--ghost" onClick={clearCart}>Clear cart</button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
