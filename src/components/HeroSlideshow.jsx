import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import './HeroSlideshow.css'

const slides = [
  { src: 'highland-coast.jpg', name: 'Coast and cottage', alt: 'Rocky coastline with heather, water and a wooden cottage', position: 'center' },
  { src: 'hero/castle.jpg', name: 'Castle by the water', alt: 'Stone castle and arched bridge reflected in calm water', position: '52% center' },
  { src: 'hero/autumn-cottage.jpg', name: 'Autumn countryside', alt: 'White cottage beneath tall trees beside an autumn hillside', position: '42% center' },
  { src: 'hero/town-street.jpg', name: 'Highland town', alt: 'Historic town street with a clock tower against a blue sky', position: '48% center' },
]

export default function HeroSlideshow({ children }) {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(true)
  const [tabVisible, setTabVisible] = useState(() => !document.hidden)
  const [loaded, setLoaded] = useState([])

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReducedMotion(preference.matches)
    const updateVisibility = () => setTabVisible(!document.hidden)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    observer.observe(sectionRef.current)
    preference.addEventListener('change', updateMotion)
    document.addEventListener('visibilitychange', updateVisibility)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', updateMotion)
      document.removeEventListener('visibilitychange', updateVisibility)
    }
  }, [])

  useEffect(() => {
    if (paused || reducedMotion || hovered || !visible || !tabVisible) return
    const timer = window.setInterval(() => {
      setActive(current => {
        const next = (current + 1) % slides.length
        return loaded.includes(next) ? next : current
      })
    }, 6000)
    return () => window.clearInterval(timer)
  }, [paused, reducedMotion, hovered, visible, tabVisible, loaded])

  const selectSlide = index => {
    setPaused(true)
    setActive((index + slides.length) % slides.length)
  }

  return (
    <section ref={sectionRef} className="hero" aria-label="Highland scenery" aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={event => {
        if (!event.target.closest('[data-rotation-control]')) setPaused(true)
      }}>
      <div className="hero__background" id="hero-slides">
        {slides.map((slide, index) => (
          <img key={slide.src} src={import.meta.env.BASE_URL + slide.src} alt={slide.alt}
            className={`hero__image hero__slide ${index === active ? 'hero__slide--active' : ''}`}
            style={{ objectPosition: slide.position }} aria-hidden={index !== active}
            decoding="async" fetchpriority={index === 0 ? 'high' : 'low'}
            onLoad={() => setLoaded(current => current.includes(index) ? current : [...current, index])} />
        ))}
        <div className="hero__overlay" />
      </div>
      {children}
      <div className="hero__slideshow-controls" role="group" aria-label="Slideshow controls"
        onKeyDown={event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            selectSlide(active + (event.key === 'ArrowLeft' ? -1 : 1))
          }
        }}>
        <button type="button" onClick={() => selectSlide(active - 1)} aria-label="Previous photo" aria-controls="hero-slides">
          <Icon name="arrow" className="hero__previous-icon" />
        </button>
        {slides.map((slide, index) => (
          <button key={slide.src} type="button" className="hero__slide-dot"
            aria-label={`Show photo ${index + 1}: ${slide.name}`} aria-current={index === active ? 'true' : undefined}
            aria-controls="hero-slides" onClick={() => selectSlide(index)}>
            <span aria-hidden="true" />
          </button>
        ))}
        <button type="button" onClick={() => selectSlide(active + 1)} aria-label="Next photo" aria-controls="hero-slides">
          <Icon name="arrow" />
        </button>
        {!reducedMotion && (
          <button type="button" data-rotation-control onClick={() => setPaused(current => !current)}
            aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} aria-controls="hero-slides">
            <Icon name={paused ? 'play' : 'pause'} />
          </button>
        )}
      </div>
      <p className="sr-only" aria-live={paused || reducedMotion ? 'polite' : 'off'} aria-atomic="true">
        Photo {active + 1} of {slides.length}: {slides[active].name}
      </p>
    </section>
  )
}
