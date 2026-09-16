import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToLocation from './components/ScrollToLocation'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Vendor from './pages/Vendor'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <div className="app">
        <ScrollToLocation />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/vendor/:id" element={<Vendor />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App



