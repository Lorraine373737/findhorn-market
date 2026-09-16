import { Link } from 'react-router-dom'
import { marketInfo } from '../data/vendors'
import Icon from './Icon'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="location">
      <div className="footer__top">
        <div className="footer__container">
          <div className="footer__map">
            <div className="footer__map-custom">
              <div className="footer__map-bg">
                <svg viewBox="0 0 400 300" className="footer__map-svg" role="img" aria-label="Illustrative map of market locations: Green Acres in Mundole and The Strathdearn in Tomatin. Full addresses follow.">
                  {/* Background */}
                  <rect width="400" height="300" fill="#445137" opacity="0.3"/>
                  
                  {/* River Findhorn (simplified) */}
                  <path 
                    d="M 50 50 Q 100 80, 150 60 T 250 100 T 350 80" 
                    stroke="#6b9ac4" 
                    strokeWidth="4" 
                    fill="none"
                    opacity="0.6"
                  />
                  <text x="180" y="55" fill="#445137" fontSize="10">River Findhorn</text>
                  
                  {/* Road A9 */}
                  <path 
                    d="M 320 20 L 280 100 L 200 200 L 150 280" 
                    stroke="#ecc2ac" 
                    strokeWidth="6" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  <text x="290" y="70" fill="#445137" fontSize="10" fontWeight="bold">A9</text>
                  
                  {/* Marker 1: Green Acres (Mundole) */}
                  <g className="footer__map-marker" style={{ cursor: 'pointer' }}>
                    <circle cx="100" cy="120" r="25" fill="#dd7959" opacity="0.2"/>
                    <circle cx="100" cy="120" r="15" fill="#445137"/>
                    <text x="100" y="125" fill="white" fontSize="12" textAnchor="middle" fontWeight="bold">1</text>
                    <rect x="45" y="150" width="110" height="40" rx="5" fill="white" opacity="0.95"/>
                    <text x="100" y="167" fill="#445137" fontSize="11" textAnchor="middle" fontWeight="bold">Green Acres</text>
                    <text x="100" y="182" fill="#445137" fontSize="10" textAnchor="middle">Mundole</text>
                  </g>
                  
                  {/* Marker 2: The Strathdearn (Tomatin) */}
                  <g className="footer__map-marker" style={{ cursor: 'pointer' }}>
                    <circle cx="260" cy="180" r="25" fill="#e9b665" opacity="0.2"/>
                    <circle cx="260" cy="180" r="15" fill="#e9b665"/>
                    <text x="260" y="185" fill="#445137" fontSize="12" textAnchor="middle" fontWeight="bold">2</text>
                    <rect x="200" y="210" width="120" height="40" rx="5" fill="white" opacity="0.95"/>
                    <text x="260" y="227" fill="#445137" fontSize="11" textAnchor="middle" fontWeight="bold">The Strathdearn</text>
                    <text x="260" y="242" fill="#445137" fontSize="10" textAnchor="middle">Tomatin</text>
                  </g>
                  
                  {/* Distance indicator */}
                  <line x1="100" y1="120" x2="260" y2="180" stroke="#445137" strokeWidth="1" strokeDasharray="5,5" opacity="0.4"/>
                  <text x="180" y="140" fill="#445137" fontSize="9">~25 km</text>
                  
                  {/* Compass */}
                  <g transform="translate(350, 40)">
                    <circle r="18" fill="white" opacity="0.9"/>
                    <text y="5" fill="#445137" fontSize="14" textAnchor="middle" fontWeight="bold">N</text>
                    <path d="M 0 -12 L 3 -6 L 0 -8 L -3 -6 Z" fill="#dd7959"/>
                  </g>
                  
                  {/* Legend */}
                  <rect x="10" y="250" width="140" height="40" rx="5" fill="white" opacity="0.9"/>
                  <circle cx="25" cy="265" r="6" fill="#dd7959"/>
                  <text x="35" y="268" fill="#445137" fontSize="9">1st Sat - Mundole</text>
                  <circle cx="25" cy="280" r="6" fill="#e9b665"/>
                  <text x="35" y="283" fill="#445137" fontSize="9">2nd Sat - Tomatin</text>
                </svg>
              </div>
            </div>
          </div>

          <div className="footer__info">
            <div className="footer__section">
              <h3 className="footer__title">Where to Find Us</h3>
              <ul className="footer__list">
                {marketInfo.locations.map((loc, index) => (
                  <li key={index} className="footer__list-item">
                    <Icon name="pin" className="footer__location-icon" />
                    <div>
                      <strong>{loc.name}</strong>
                      <p>{loc.address}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__section" id="hours">
              <h3 className="footer__title">Market Hours</h3>
              <ul className="footer__list footer__list--hours">
                {marketInfo.hours.map((schedule, index) => (
                  <li key={index} className="footer__list-item">
                    <span className="footer__day">{schedule.day}</span>
                    <span className="footer__time">{schedule.time}</span>
                    <span className="footer__location">{schedule.location}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container footer__bottom-content">
          <Link to="/" className="footer__logo">
            <img src={import.meta.env.BASE_URL + 'logo.png'} alt="" className="footer__logo-img" />
            <span className="footer__logo-text">Findhorn River Farmers Market</span>
          </Link>

          <p className="footer__tagline">Fresh from the Highlands to Your Table</p>

          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>

          <p className="footer__copyright">
            © {new Date().getFullYear()} Findhorn River Farmers Market. All rights reserved.
          </p>
          <p className="footer__student-note">
            Student Project by <strong>Cass, Hailun & Alex</strong> | GSA Stage 1 Part B
          </p>
        </div>
      </div>
    </footer>
  )
}
