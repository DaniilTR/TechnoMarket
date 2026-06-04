import { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { apiGet } from '../api/client'

export default function Catalog() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    apiGet('/products')
      .then((data) => setProducts(data.products))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(() => {
    if (!query) return products
    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [products, query])

  return (
    <main className="section">
      <div className="container">
        <div className="section__head">
          <h2>Catalog</h2>
          <p>Pick parts for your next build. Stock updates in real time.</p>
        </div>
        <div className="catalog__controls">
          <input
            type="text"
            placeholder="Search components"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <span>{filtered.length} items</span>
        </div>
        {loading && <p>Loading catalog...</p>}
        {error && <p className="error">{error}</p>}
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}
