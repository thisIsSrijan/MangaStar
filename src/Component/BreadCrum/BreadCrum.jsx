import React from 'react'
import './BreadCrum.css'
import arrowIcon from '../Assets/breadcrum_arrow.png'

export const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrowIcon} alt=''/> SHOP <img src={arrowIcon} alt=''/> {product.category} <img src={arrowIcon} alt=''/> {product.name}
    </div>
  )
}
