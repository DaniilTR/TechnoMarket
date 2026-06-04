import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="eyebrow">Магазин комплектующих</p>
            <h1>Собирай быстрее, холоднее и умнее.</h1>
            <p className="lead">
              Премиальные видеокарты, процессоры, платы, накопители и охлаждение.
              Актуальные запасы и проверка совместимости.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/catalog">В магазин</Link>
              <Link className="btn btn--ghost" to="/bundles">Наборы сборок</Link>
            </div>
            <div className="hero__stats">
              <div>
                <strong>350+</strong>
                <span>SKUs in stock</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>Express delivery</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Builder rating</span>
              </div>
            </div>
          </div>
            <div className="hero__panel">
            <h3>Рекомендуемая сборка</h3>
            <p>Creator Studio 2024</p>
            <ul>
              <li>RTX 4070 Super</li>
              <li>Ryzen 9 7900X</li>
              <li>64GB DDR5</li>
              <li>2TB NVMe Gen4</li>
            </ul>
            <Link className="btn btn--primary" to="/bundles">Посмотреть наборы</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>Shop by category</h2>
            <p>Core parts for every budget and build style.</p>
          </div>
          <div className="category-grid">
            <div className="category-card">Graphics cards</div>
            <div className="category-card">Processors</div>
            <div className="category-card">Motherboards</div>
            <div className="category-card">Memory</div>
            <div className="category-card">Storage</div>
            <div className="category-card">Power + cooling</div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container split">
          <div>
            <h2>Real-time compatibility checks</h2>
            <p>
              We validate every cart for socket, chipset, power, and size fit before
              shipping.
            </p>
          </div>
          <div className="note-card">
            <h4>Need help?</h4>
            <p>Chat with a builder for BIOS, updates, and thermal tuning.</p>
            <Link className="btn btn--ghost" to="/support">Talk to support</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
