import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  }

  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
}


