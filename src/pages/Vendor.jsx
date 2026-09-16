import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { vendors } from '../data/vendors'
import ProductCard from '../components/ProductCard'
import Icon from '../components/Icon'
import './Vendor.css'

export default function Vendor() {
  const { id } = useParams()
  const [showBackToTop, setShowBackToTop] = useState(false)
  
  const vendor = vendors.find(v => v.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

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

  if (!vendor) {
    return (
      <div className="vendor-not-found">
        <div className="container">
          <h1>Vendor Not Found</h1>
          <p>Sorry, we couldn't find the vendor you're looking for.</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="vendor-page">
      {/* Hero Section */}
      <section className="vendor-hero">
        <div className="vendor-hero__background">
          <img 
            src={vendor.heroImage || vendor.image}
            alt=""
            className="vendor-hero__image"
          />
          <div className="vendor-hero__overlay"></div>
        </div>
        <div className="vendor-hero__content">
          <Link to="/shop" className="vendor-hero__back animate-fade-in">
            ← Back to Market
          </Link>
          <div className="vendor-hero__info animate-fade-in-up">
            <span className={`badge ${vendor.available ? 'badge-available' : 'badge-sold-out'}`}>
              {vendor.available ? 'Available Now' : 'Currently Unavailable'}
            </span>
            <h1 className="vendor-hero__title">{vendor.name}</h1>
            <p className="vendor-hero__location">
              <Icon name="pin" /> {vendor.location}
            </p>
          </div>
        </div>
      </section>

      {/* About Vendor */}
      <section className="vendor-about">
        <div className="container">
          <div className="vendor-about__grid">
            <div className="vendor-about__image-wrapper animate-fade-in-up">
              <img 
                src={vendor.image}
                alt={vendor.name}
                className="vendor-about__image"
              />
            </div>
            <div className="vendor-about__content animate-fade-in-up stagger-1">
              <h2>About {vendor.name}</h2>
              <p>{vendor.longDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="vendor-products">
        <div className="container">
          <h2 className="vendor-products__title">Our Products</h2>
          <div className="vendor-products__grid">
            {vendor.products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                vendor={vendor}
                index={index}
              />
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



