import { useState, useEffect } from 'react'
import { vendors } from '../data/vendors'
import VendorCard from '../components/VendorCard'
import Icon from '../components/Icon'
import './Shop.css'

export default function Shop() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  const filteredVendors = filter === 'all' 
    ? vendors 
    : filter === 'available' 
      ? vendors.filter(v => v.available)
      : vendors.filter(v => !v.available)

  return (
    <div className="shop">
      {/* Hero */}
      <section className="shop-hero">
        <div className="shop-hero__background">
          <img 
            src={import.meta.env.BASE_URL + 'catalog/7caed3c6f2fa.jpg'}
            alt=""
            className="shop-hero__image"
          />
          <div className="shop-hero__overlay"></div>
        </div>
        <div className="shop-hero__content">
          <h1 className="shop-hero__title animate-fade-in-up">Shop the Market</h1>
          <p className="shop-hero__subtitle animate-fade-in-up stagger-1">
            Meet the growers and makers along the Findhorn River, from Mundole to Tomatin.
          </p>
        </div>
      </section>

      {/* Vendors Grid */}
      <section className="shop-vendors">
        <div className="container">
          <div className="shop-vendors__header">
            <div className="shop-vendors__info">
              <span className="shop-vendors__count" role="status">
                {filteredVendors.length} vendor{filteredVendors.length !== 1 ? 's' : ''}
              </span>
            </div>
            <div className="shop-vendors__filters">
              <button 
                className={`shop-vendors__filter ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
                aria-pressed={filter === 'all'}
              >
                All
              </button>
              <button 
                className={`shop-vendors__filter ${filter === 'available' ? 'active' : ''}`}
                onClick={() => setFilter('available')}
                aria-pressed={filter === 'available'}
              >
                Available Now
              </button>
              <button 
                className={`shop-vendors__filter ${filter === 'soldout' ? 'active' : ''}`}
                onClick={() => setFilter('soldout')}
                aria-pressed={filter === 'soldout'}
              >
                Sold Out
              </button>
            </div>
          </div>

          <div className="shop-vendors__grid">
            {filteredVendors.map((vendor, index) => (
              <VendorCard key={vendor.id} vendor={vendor} index={index % 6} />
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <Icon name="up" />
      </button>
    </div>
  )
}
