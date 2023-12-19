import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_small.png'
import instaIcon from '../Assets/instagram_icon.png'
import whatsappIcon from '../Assets/whatsapp_icon.png'
import pinterestIcon from '../Assets/pinterest_icon.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>MANGASTARS</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-social-icon-container'>
                <img src={instaIcon} alt=''/>
            </div>
            <div className='footer-social-icon-container'>
                <img src={whatsappIcon} alt=''/>
            </div>
            <div className='footer-social-icon-container'>
                <img src={pinterestIcon} alt=''/>
            </div>
        </div>
        <div className='footer-terms'>
            <hr/>
            <p>Copyright @2023 - All Rights Reserved | Developed By Srijan Das</p>
        </div>
    </div>
  )
}
