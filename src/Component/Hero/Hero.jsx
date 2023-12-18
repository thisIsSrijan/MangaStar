import React from 'react'
import './Hero.css'
import hero from '../Assets/hero_small.png'
import arrow_icon from '../Assets/arrow.png'
import wow_small from '../Assets/wow_small.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>Read Your Favorite Manga</h2>
            <div>
                <div className='wow-icon'>
                    <p>Hundreds</p>
                    <img src={wow_small} alt='wow' />
                </div>
                <p>of original manga</p>
                <p>for everyone</p>
            </div>
            <a href="#newReleaseHeroSection">
            <div className='hero-shop-now'>
                <div>New Releases</div>
                <img src={arrow_icon} alt=''/>
            </div>
            </a>
        </div>
        <div className='hero-right'>
            <img src={hero} alt='hero' />
        </div>
    </div>
  )
}
