import { Link } from 'react-router-dom'
import Icon from './Icon'
import './VendorCard.css'

export default function VendorCard({ vendor }) {
  return (
    <Link 
      to={`/vendor/${vendor.id}`} 
      className="vendor-card"
    >
      <div className="vendor-card__image-wrapper">
        <img 
          src={vendor.image} 
          alt=""
          className="vendor-card__image"
          loading="lazy"
        />
      </div>
      <div className="vendor-card__content">
        <div className="vendor-card__header">
          <h3 className="vendor-card__name">{vendor.name}</h3>
          <span className={`badge ${vendor.available ? 'badge-available' : 'badge-sold-out'}`}>
            {vendor.available ? 'Available' : 'Sold Out'}
          </span>
        </div>
        <p className="vendor-card__location">
          <Icon name="pin" />
          {vendor.location}
        </p>
        <p className="vendor-card__description">{vendor.description}</p>
        <span className="vendor-card__view">View Products <Icon name="arrow" /></span>
      </div>
    </Link>
  )
}



