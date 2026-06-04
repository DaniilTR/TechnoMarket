import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container header__inner">
          <div className="logo">
            <span className="logo__mark">TM</span>
            <span className="logo__text">TechnoMarket</span>
          </div>
          <nav className="nav">
            <a href="#catalog" className="nav__link">Catalog</a>
            <a href="#bundles" className="nav__link">Build Kits</a>
            <a href="#support" className="nav__link">Support</a>
            <a href="#contact" className="nav__link nav__link--cta">Get Quote</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="hero__eyebrow">PC Components Store</p>
              <h1 className="hero__title">Upgrade the heart of your rig.</h1>
              <p className="hero__subtitle">
                GPUs, CPUs, motherboards, and storage delivered fast. Curated for
                performance builders and creators.
              </p>
              <div className="hero__actions">
                <button className="button button--primary">Shop components</button>
                <button className="button button--ghost">Build a PC</button>
              </div>
              <div className="hero__stats">
                <div className="stat">
                  <span className="stat__value">24h</span>
                  <span className="stat__label">Express delivery</span>
                </div>
                <div className="stat">
                  <span className="stat__value">350+</span>
                  <span className="stat__label">SKUs in stock</span>
                </div>
                <div className="stat">
                  <span className="stat__value">4.9/5</span>
                  <span className="stat__label">Builder reviews</span>
                </div>
              </div>
            </div>
            <div className="hero__card">
              <div className="hero__card-top">
                <span className="chip">Best Seller</span>
                <span className="price">$499</span>
              </div>
              <h3 className="hero__card-title">RTX Velocity 4070</h3>
              <p className="hero__card-sub">12GB GDDR6X · 240mm dual-fan</p>
              <div className="hero__card-metrics">
                <div>
                  <span className="metric__label">Boost</span>
                  <span className="metric__value">2.6 GHz</span>
                </div>
                <div>
                  <span className="metric__label">Power</span>
                  <span className="metric__value">220 W</span>
                </div>
                <div>
                  <span className="metric__label">Ports</span>
                  <span className="metric__value">HDMI + 3 DP</span>
                </div>
              </div>
              <button className="button button--primary button--full">Add to cart</button>
            </div>
          </div>
        </section>

        <section id="catalog" className="section">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Shop by category</h2>
              <p className="section__subtitle">Everything you need for a clean build.</p>
            </div>
            <div className="grid grid--categories">
              <article className="card card--category">
                <h3>Graphics Cards</h3>
                <p>Ray tracing ready, AI boosted.</p>
                <span className="card__meta">From $229</span>
              </article>
              <article className="card card--category">
                <h3>Processors</h3>
                <p>Multi-core speed for work + play.</p>
                <span className="card__meta">From $149</span>
              </article>
              <article className="card card--category">
                <h3>Motherboards</h3>
                <p>Stable power delivery and IO.</p>
                <span className="card__meta">From $129</span>
              </article>
              <article className="card card--category">
                <h3>Memory</h3>
                <p>DDR5 kits with tight timings.</p>
                <span className="card__meta">From $89</span>
              </article>
              <article className="card card--category">
                <h3>Storage</h3>
                <p>NVMe Gen4, blazing load times.</p>
                <span className="card__meta">From $69</span>
              </article>
              <article className="card card--category">
                <h3>Power + Cooling</h3>
                <p>Quiet fans, efficient PSUs.</p>
                <span className="card__meta">From $59</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--featured">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Featured drops</h2>
              <p className="section__subtitle">Fresh arrivals for 2024 builds.</p>
            </div>
            <div className="grid grid--products">
              <article className="card card--product">
                <div className="card__tag">New</div>
                <h3>Nova Z790 Pro</h3>
                <p>ATX · WiFi 7 · Thunderbolt 4</p>
                <div className="card__row">
                  <span>$319</span>
                  <button className="button button--mini">Add</button>
                </div>
              </article>
              <article className="card card--product">
                <div className="card__tag">Hot</div>
                <h3>Ryzen 9 Apex</h3>
                <p>16 cores · 5.6 GHz boost</p>
                <div className="card__row">
                  <span>$549</span>
                  <button className="button button--mini">Add</button>
                </div>
              </article>
              <article className="card card--product">
                <div className="card__tag">Bundle</div>
                <h3>FrostFlow 360</h3>
                <p>ARGB AIO · 32 dBA max</p>
                <div className="card__row">
                  <span>$129</span>
                  <button className="button button--mini">Add</button>
                </div>
              </article>
              <article className="card card--product">
                <div className="card__tag">Editor</div>
                <h3>HyperX 64GB DDR5</h3>
                <p>6000 MHz · CL30</p>
                <div className="card__row">
                  <span>$219</span>
                  <button className="button button--mini">Add</button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="bundles" className="section section--bundles">
          <div className="container bundles">
            <div className="bundles__content">
              <h2 className="section__title">Curated PC build kits</h2>
              <p className="section__subtitle">
                Pick a build goal and we match every part for balance, thermals, and budget.
              </p>
              <ul className="bundles__list">
                <li>Creator Studio · Silence focused</li>
                <li>Esports Focus · 240+ FPS target</li>
                <li>Compact Power · Mini-ITX ready</li>
              </ul>
              <button className="button button--primary">See build kits</button>
            </div>
            <div className="bundles__stack">
              <div className="stack-card">
                <h3>Creator Studio</h3>
                <p>RTX 4070 · 64GB DDR5 · 2TB NVMe</p>
                <span className="stack-card__price">$1,899</span>
              </div>
              <div className="stack-card">
                <h3>Esports Focus</h3>
                <p>RTX 4060 · 32GB DDR5 · 1TB NVMe</p>
                <span className="stack-card__price">$1,199</span>
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="section section--support">
          <div className="container support">
            <div>
              <h2 className="section__title">Builder support, 7 days a week</h2>
              <p className="section__subtitle">
                Need a BIOS update, compatibility check, or troubleshooting?
              </p>
            </div>
            <div className="support__cards">
              <div className="support__card">
                <h3>Compatibility check</h3>
                <p>We validate every cart before shipping.</p>
              </div>
              <div className="support__card">
                <h3>Free build guide</h3>
                <p>PDF + video series for first-time builders.</p>
              </div>
              <div className="support__card">
                <h3>Instant pickup</h3>
                <p>Local pickup in 2 hours where available.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--newsletter">
          <div className="container newsletter">
            <div>
              <h2 className="section__title">Get weekly drops + price alerts</h2>
              <p className="section__subtitle">No spam. Just deals and build tips.</p>
            </div>
            <form className="newsletter__form">
              <input className="newsletter__input" type="email" placeholder="Email address" />
              <button className="button button--primary">Notify me</button>
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container footer__inner">
          <div>
            <h3 className="footer__logo">TechnoMarket</h3>
            <p>Components for creators, gamers, and builders.</p>
          </div>
          <div className="footer__links">
            <a href="#catalog">Catalog</a>
            <a href="#bundles">Build Kits</a>
            <a href="#support">Support</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__meta">
            <span>hello@technomarket.com</span>
            <span>+1 (800) 555-0199</span>
            <span>Mon-Sun · 09:00-20:00</span>
          </div>
        </div>
        <div className="footer__bottom">© 2024 TechnoMarket. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
