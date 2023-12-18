import React from 'react'
import './Offer.css'
import exclusive_img from '../Assets/exclusive-offer-img.png'
import { Link } from 'react-router-dom'
export const Offer = () => {
  return (
    <div className='offer'>
        <div className='offer-left'>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>Only on Best seller products</p>
            <Link to='/'><button onClick={()=>{window.scrollTo(0,0)}}>Shop Now</button></Link>
        </div>
        <div className='offer-right'>
            <img src={exclusive_img} alt='' style={{height:'400px'}}/>
        </div>
    </div>
  )
}
