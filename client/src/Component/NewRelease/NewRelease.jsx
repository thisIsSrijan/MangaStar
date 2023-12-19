import React from 'react'
import './NewRelease.css'
import newReleaseDB from '../Assets/newRelease'
import {Item} from '../Items/Item'
export const NewRelease = () => {
  return (
    <div className='newRelease' id='newReleaseHeroSection'>
        <h1>NEWLY RELEASED</h1>
        <hr/>
        <div className='release'>
            {
                newReleaseDB.map((item,i) => {
                    return <Item key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    newPrice={item.newPrice}/>
                })
            }
        </div>
    </div>
  )
}
