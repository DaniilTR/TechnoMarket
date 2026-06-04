export default function Bundles() {
  return (
    <main className="section">
      <div className="container">
        <div className="section__head">
          <h2>Наборы сборок</h2>
          <p>Сбалансированные и протестированные конфигурации под разные задачи.</p>
        </div>
        <div className="bundle-grid">
          <div className="bundle-card">
            <h3>Creator Studio</h3>
            <p>Тишина в работе, быстрый рендер, видеокарта для 4K.</p>
            <span>$1,899</span>
          </div>
          <div className="bundle-card">
            <h3>Esports Focus</h3>
            <p>Высокий FPS, низкая задержка, быстрый запуск игр.</p>
            <span>$1,199</span>
          </div>
          <div className="bundle-card">
            <h3>Compact Power</h3>
            <p>Mini-ITX сборка без компромиссов.</p>
            <span>$1,499</span>
          </div>
        </div>
      </div>
    </main>
  )
}
