import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropDownIcon from '../Component/Assets/dropdown_icon.png'
import {Item} from '../Component/Items/Item'

export const ShopCategory = (props) => {
    const {products} = useContext(ShopContext);
  return (
    <div className='shopCategory'>
        <img className='shopCategory-banner' src={props.banner} alt={props.category}/>
        <div className='shopCategory-sortIndex'>
        <p>
            <span>Showing 1-12</span> out of 18 products
        </p>
        <div className='shopCategory-sort'>
            Sort by <img src={dropDownIcon} alt="sort by"/>
        </div>
        </div>
        <div className='shopCategory-products'>
            {products.map((item,i) =>{
                if(props.category===item.category){
                   return (<Item key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    newPrice={item.newPrice}/>)
                }else{
                    return null
                }
            })}
        </div>
        <div className='shopCategory-loadMore'>
            Explore more
        </div>
    </div>
  )
}
