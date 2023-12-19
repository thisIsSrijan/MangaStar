// SuccessPage.js

import React from 'react';
import './Success.css';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';

export const Success = () => {
  return (
    <>
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
    />
    <div className="success-container">
      <div className="success-icon">&#10004;</div>
      <h1>Payment Successful!</h1>
      <p>Thank you for shopping with us. We have received your order and will send you updates on your email.</p>
      <button className="order-button"><Link to='/' style={{color:'#fff' , textDecoration:'none' , fontSize:'1em'}}>Shop More</Link></button>
    </div>
    </>
  );
};

