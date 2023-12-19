// FailurePage.js

import React from 'react';
import './Failure.css';
import { Link } from 'react-router-dom';

export const Failure = () => {
  return (
    <div className="failure-container">
      <div className="failure-icon">&#10060;</div>
      <h1>Payment Failed</h1>
      <p>Oops! Something went wrong with your payment. Please try again.</p>
      <button className="retry-button"><Link to='/login' style={{color:'#fff' , textDecoration:'none' , fontSize:'1em'}}>Login to Retry</Link></button>
    </div>
  );
};
