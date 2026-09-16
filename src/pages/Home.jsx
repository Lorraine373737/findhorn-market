import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { marketInfo, vendors } from '../data/vendors'
import VendorCard from '../components/VendorCard'
import Icon from '../components/Icon'
import HeroSlideshow from '../components/HeroSlideshow'
import './Home.css'

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const featuredVendors = vendors.filter(v => v.available).slice(0, 3)

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

  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSlideshow>
        <div className="hero__content">
          <div className="hero__badge animate-fade-in-up">FINDHORN RIVER · MUNDOLE TO TOMATIN</div>
          <h1 className="hero__title animate-fade-in-up stagger-1">
            Fresh from the<br />
            <span className="hero__title-accent">Highlands</span>
          </h1>
          <p className="hero__subtitle animate-fade-in-up stagger-2">
            Local produce, artisan goods, and Highland flavours —<br />
            straight from our farmers to your table.
          </p>
          <div className="hero__actions animate-fade-in-up stagger-3">
            <Link to="/shop" className="btn btn-secondary">
              Shop the Market
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/#about" className="btn btn-outline hero__btn-outline">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <span>Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </HeroSlideshow>

      {/* Featured Vendors */}
      <section className="featured">
        <div className="container">
          <div className="featured__header">
            <span className="featured__label">This Week at the Market</span>
            <h2 className="featured__title">Featured Vendors</h2>
          </div>
          <div className="featured__grid">
            {featuredVendors.map((vendor, index) => (
              <VendorCard key={vendor.id} vendor={vendor} index={index} />
            ))}
          </div>
          <div className="featured__action">
            <Link to="/shop" className="btn btn-primary">
              View All Vendors
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__image-wrapper animate-fade-in-up">
              <img 
                src={import.meta.env.BASE_URL + 'catalog/f5b823807e77.jpg'}
                alt="Fresh produce at market"
                className="about__image"
              />
              <div className="about__image-accent"></div>
            </div>
            <div className="about__content">
              <span className="about__label">Our Story</span>
              <h2 className="about__title">About Us</h2>
              <div className="about__text">
                {marketInfo.about.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="about__features">
                <div className="about__feature">
                  <Icon name="leaf" className="about__feature-icon" />
                  <div>
                    <h3>Locally Sourced</h3>
                    <p>All products from within 30 miles</p>
                  </div>
                </div>
                <div className="about__feature">
                  <Icon name="community" className="about__feature-icon" />
                  <div>
                    <h3>Direct from Farmers</h3>
                    <p>Meet the people who grow your food</p>
                  </div>
                </div>
                <div className="about__feature">
                  <Icon name="recycle" className="about__feature-icon" />
                  <div>
                    <h3>Sustainable Practices</h3>
                    <p>Eco-friendly and ethical farming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="highlights">
        <div className="highlights__inner">
          <div className="highlights__item">Fresh Apples</div>
          <div className="highlights__item">Local Honey</div>
          <div className="highlights__item">Highland Whisky</div>
          <div className="highlights__item">Artisan Bread</div>
          <div className="highlights__item">Scottish Cheese</div>
          <div className="highlights__item">Smoked Salmon</div>
          <div className="highlights__item">Fresh Herbs</div>
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



