import React from "react";
import { createContext, useState } from "react";
import products from "../Component/Assets/products";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  // console.log(cartItem);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItem);
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        total += itemInfo.newPrice
          ? itemInfo.newPrice * cartItem[item]
          : itemInfo.price * cartItem[item];
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItem) {
      totalItems += cartItem[item];
    }
    return totalItems;
  };

  const [logged, setLogged] = useState(false);

  const notifyLogin = () => toast("Logged In");
  const notifyLogout = () => toast("Successfully logged out!");
  const notifySignup = () =>
    toast("Welcome! you signed up successfully and are now logged in!");

  const contextValue = {
    products,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    logged,
    setLogged,
    notifyLogin,
    notifyLogout,
    notifySignup,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
