import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const isInCart = (id) => cart.some((dato) => dato.id === id);

  const addItemCart = (data, cantidad) => {
    if (isInCart(data.id_store)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id_store === data.id_store) {
          return {
            ...cartElement,
            cantidad: cartElement.cantidad + cantidad,
          };
        } else return cartElement;
      });
      return setCart(newCart);
    } else {
      setCart((e) => [...e, { ...data, cantidad }]);
    }
  };

  
  const removeItem = (itemId) => {
    
    setCart(cart.filter((item) => item.id_store !== itemId));
  };

  const clear = () => setCart([]);

  const totalItemsPrice = (dataPrice, dataQuantity) => {
    return dataPrice * dataQuantity;
  };

  const totalItemsCart = cart.reduce((acum, item) => {
    return acum + item.cantidad;
  }, 0);

  const totalPrice = cart.reduce((acum, item) => {
    let itemPrice = item.price * item.cantidad;
    return acum + itemPrice;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        clear,
        addItemCart,
        removeItem,
        totalItemsPrice,
        totalItemsCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
