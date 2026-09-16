import { useState } from 'react'
import { useCart } from '../context/CartContext'
import Icon from './Icon'
import './ProductCard.css'

export default function ProductCard({ product, vendor }) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  const handleAddToCart = () => {
    if (!product.available) return
    
    setIsAdding(true)
    addToCart(product, vendor)
    
    setTimeout(() => {
      setIsAdding(false)
      setJustAdded(true)
      setTimeout(() => setJustAdded(false), 1500)
    }, 300)
  }

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        {!product.available && (
          <div className="product-card__sold-out-overlay">
            <span>Sold Out</span>
          </div>
        )}
      </div>
      <div className="product-card__content">
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__price-row">
          <span className="product-card__price">£{product.price.toFixed(2)}</span>
          <span className="product-card__unit">{product.unit}</span>
        </div>
        <button 
          className={`product-card__btn ${justAdded ? 'product-card__btn--added' : ''}`}
          onClick={handleAddToCart}
          disabled={!product.available || isAdding}
          aria-label={!product.available ? `${product.name}, sold out` : isAdding ? `Adding ${product.name}` : justAdded ? `${product.name} added to basket` : `Add ${product.name} to basket`}
          aria-busy={isAdding}
        >
          {!product.available ? (
            'Sold Out'
          ) : justAdded ? (
            <>
              <Icon name="check" />
              Added!
            </>
          ) : isAdding ? (
            <span className="product-card__spinner" aria-hidden="true"></span>
          ) : (
            'Add to Cart'
          )}
        </button>
        <span className="sr-only" role="status">{justAdded ? `${product.name} added to basket.` : ''}</span>
      </div>
    </div>
  )
}



