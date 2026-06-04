import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
