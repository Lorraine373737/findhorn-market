import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('findhorn-cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('findhorn-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, vendor) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id)
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex].quantity += 1
        return updated
      }
      return [...prev, { product, vendor, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ))
  }

  const clearCart = () => setCart([])

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}



