import React from "react";
import "./CartItems.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png";
import {loadStripe} from '@stripe/stripe-js';

export const CartItem = () => {
  const { products, cartItem, removeFromCart , getTotalCartAmount , logged} = useContext(ShopContext);
  const cartHandler = async ()=>{
    if(!logged){
      alert("Please login to continue")
    }else if(getTotalCartAmount()===0){
      alert("Please add items to your cart")
    }else{
      // alert("Thank you for shopping with us!")
      const stripe = await loadStripe("pk_test_51OP1apCFHl4P44p8OsVU5ETSIwLreLo8EQ4bA1YXXjoUwE3vz5GZ71cBUy8bBA1t2awEKnWmufj18OaAeVBPMfEK00MF0zSkBo");
      const finalCart = []
      for(const item in cartItem){
        if(cartItem[item]>0){
          for(const product in products){
            if(products[product].id===Number(item)){
              finalCart.push(products[product])
              finalCart[finalCart.length-1].quantity = cartItem[item]
            }
          }
        }
      }
      console.log(finalCart);
      const body = {
        placedProducts: finalCart,
      }
      const headers = {
        "Content-type": "application/json"
      }
      const response = await fetch("http://localhost:5000/api/payment",{
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      })

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if(result.error){
        alert(result.error.message)
      }
    }
  }

  return (
    <div className="cartItem">
      <div className="cartItem-format-main">
        <p>Mangas</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="cartItem-format cartItem-format-main">
                <img src={e.image} alt="" style={{ height: "62px" }} />
                <p>{e.name}</p>
                <p>Rs. {e.newPrice ? e.newPrice : e.price}</p>
                <button className="cartItems-quantity">{cartItem[e.id]}</button>
                <p>
                  Rs. {(e.newPrice ? e.newPrice : e.price) * cartItem[e.id]}
                </p>
                <img
                  className="cartIcon-removeIcon"
                  src={removeIcon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cartItem-down">
        <div className="cartItem-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItem-total-item">
              <p>SubTotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItem-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartItem-total-item">
                <h3>Total</h3>
                <h3>Rs. {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="cartItem-checkout" onClick={()=>{cartHandler()}}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};
