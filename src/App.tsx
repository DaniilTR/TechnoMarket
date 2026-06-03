import reactLogo from './assets/react.svg'
import './App.css'

type Product = {
  id: number
  title: string
  price: string
  desc?: string
}

const products: Product[] = [
  { id: 1, title: 'Видеокарта RTX 4070', price: '69990 ₽', desc: 'Высокая производительность' },
  { id: 2, title: 'Процессор Ryzen 7', price: '42990 ₽', desc: '8 ядер, 16 потоков' },
  { id: 3, title: 'SSD 1TB NVMe', price: '8990 ₽', desc: 'Быстрые загрузки' },
  { id: 4, title: 'Материнская плата Z690', price: '17990 ₽', desc: 'Поддержка PCIe 4.0' },
  { id: 5, title: 'Блок питания 750W', price: '6990 ₽', desc: 'Надёжный и тихий' },
  { id: 6, title: 'Оперативная память 32GB', price: '15990 ₽', desc: '3200MHz CL16' },
]

function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container header-row">
          <div className="brand">
            <img src={reactLogo} alt="logo" className="logo" />
            <div>
              <h1>TechnoMarket</h1>
              <div className="tag">Маркет компьютерных комплектующих</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#">Каталог</a>
            <a href="#">Доставка</a>
            <a href="#">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h2>Собери идеальную сборку</h2>
            <p>Лучшие комплектующие по честным ценам. Сборка и доставка по всей России.</p>
            <div className="hero-ctas">
              <button className="btn primary">Перейти в каталог</button>
              <button className="btn ghost">Связаться</button>
            </div>
          </div>
          <div className="hero-search">
            <input placeholder="Поиск компонентов, например 'RTX 4070'" />
          </div>
        </div>
      </section>

      <main className="site-main container">
        <h3>Популярные товары</h3>
        <div className="grid">
          {products.map((p) => (
            <article key={p.id} className="product-card">
              <div className="product-media">{/* placeholder image */}</div>
              <h4>{p.title}</h4>
              <p className="muted">{p.desc}</p>
              <div className="product-row">
                <div className="price">{p.price}</div>
                <button className="btn small">В корзину</button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>TechnoMarket</h4>
            <p className="muted">© {new Date().getFullYear()} TechnoMarket</p>
          </div>
          <div>
            <h4>Помощь</h4>
            <ul className="footer-links">
              <li><a href="#">Доставка</a></li>
              <li><a href="#">Возврат</a></li>
            </ul>
          </div>
          <div>
            <h4>Контакты</h4>
            <p className="muted">support@technomarket.local</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
