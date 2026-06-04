import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <div className="product-card__meta">
          <span className="price">${product.price}</span>
          <span className="stock">{product.stock} in stock</span>
        </div>
        <div className="product-card__actions">
          <Link className="btn btn--ghost" to={`/product/${product.slug}`}>Details</Link>
          <button className="btn btn--primary" onClick={() => addItem(product, 1)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
