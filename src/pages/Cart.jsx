import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Icon from '../components/Icon'
import { vendors } from '../data/vendors'
import './Cart.css'

// Resolve current images for baskets saved before assets were moved locally.
const productImages = Object.fromEntries(vendors.flatMap(vendor => vendor.products.map(product => [product.id, product.image])))

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <div className="cart-empty__content animate-fade-in-up">
            <Icon name="bag" className="cart-empty__icon" />
            <h1>Your basket is empty</h1>
            <p>Looks like you haven't added any items yet.<br />Explore our market to find fresh Highland produce!</p>
            <Link to="/shop" className="btn btn-primary">
              Shop the Market
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__header animate-fade-in-up">
          <h1 className="cart__title">Your Basket</h1>
          <button className="cart__clear" onClick={clearCart}>
            Clear all
          </button>
        </div>

        <div className="cart__layout">
          <div className="cart__items">
            {cart.map((item, index) => (
              <div 
                key={item.product.id} 
                className={`cart-item animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="cart-item__image-wrapper">
                  <img 
                    src={productImages[item.product.id] || item.product.image}
                    alt={item.product.name}
                    className="cart-item__image"
                  />
                </div>
                <div className="cart-item__details">
                  <div className="cart-item__info">
                    <h3 className="cart-item__name">{item.product.name}</h3>
                    <p className="cart-item__vendor">
                      From <Link to={`/vendor/${item.vendor.id}`}>{item.vendor.name}</Link>
                    </p>
                    <p className="cart-item__unit">{item.product.unit}</p>
                  </div>
                  <div className="cart-item__actions">
                    <div className="cart-item__quantity">
                      <button 
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        aria-label={`Decrease quantity of ${item.product.name}`}
                      >
                        −
                      </button>
                      <span className="cart-item__qty-value">{item.quantity}</span>
                      <button 
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        aria-label={`Increase quantity of ${item.product.name}`}
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-item__price">
                      £{(item.product.price * item.quantity).toFixed(2)}
                    </div>
                    <button 
                      className="cart-item__remove"
                      onClick={() => removeFromCart(item.product.id)}
                      aria-label={`Remove ${item.product.name}`}
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart__summary animate-fade-in-up stagger-2">
            <div className="cart-summary">
              <h2 className="cart-summary__title">Order Summary</h2>
              
              <div className="cart-summary__lines">
                <div className="cart-summary__line">
                  <span>Subtotal</span>
                  <span>£{cartTotal.toFixed(2)}</span>
                </div>
                <div className="cart-summary__line">
                  <span>Collection</span>
                  <span className="cart-summary__free">Free</span>
                </div>
              </div>

              <div className="cart-summary__total">
                <span>Total</span>
                <span>£{cartTotal.toFixed(2)}</span>
              </div>

              <button className="cart-summary__checkout btn btn-secondary">
                Reserve for Collection
              </button>

              <p className="cart-summary__note">
                <Icon name="pin" /> Collect at our next market day.<br />
                We'll confirm your reservation via email.
              </p>

              <Link to="/shop" className="cart-summary__continue">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



