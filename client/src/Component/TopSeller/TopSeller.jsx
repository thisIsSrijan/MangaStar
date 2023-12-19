import React from 'react'
import './TopSeller.css'
import {topSeller} from '../Assets/topSeller'
import { Item } from '../Items/Item'

export const TopSeller = () => {
  return (
    <div className='topSeller'>
        <h1>TOP SELLER OF ALL TIME</h1>
        <hr/>
        <div className='topSeller-items'>
            {topSeller.map((item,i)=>{
                return(
                    <Item key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    newPrice={item.newPrice}
                    />
                )
            })}
        </div>
    </div>
  )
}
