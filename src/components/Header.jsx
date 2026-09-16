import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Icon from './Icon'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={import.meta.env.BASE_URL + 'logo.png'} alt="" className="header__logo-img" />
          <div className="header__logo-text">
            <span className="header__logo-name">Findhorn River</span>
            <span className="header__logo-tagline">Farmers Market</span>
          </div>
        </Link>

        <nav id="main-navigation" className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          <Link to="/shop" className="header__nav-link">
            Shop the Market
          </Link>
          <Link to="/#hours" className="header__nav-link" onClick={() => setMobileMenuOpen(false)}>
            Market Hours
          </Link>
          <Link to="/#location" className="header__nav-link" onClick={() => setMobileMenuOpen(false)}>
            Where to Find Us
          </Link>
          <Link to="/#about" className="header__nav-link" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
        </nav>

        <div className="header__actions">
          <Link to="/cart" className="header__cart" aria-label={`Shopping basket, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}>
            <Icon name="bag" className="header__cart-icon" />
            {cartCount > 0 && (
              <span className="header__cart-count" aria-hidden="true">{cartCount}</span>
            )}
          </Link>

          <button 
            className="header__menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="main-navigation"
          >
            <span className={`header__menu-icon ${mobileMenuOpen ? 'header__menu-icon--open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}
