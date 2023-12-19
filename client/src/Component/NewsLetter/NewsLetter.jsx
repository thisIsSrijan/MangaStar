import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Sale Alert Beforehand!</h1>
        <p>Subscribe to Our Newsletter and Stay Updated</p>
        <div>
            <input type='email' placeholder='Enter Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
