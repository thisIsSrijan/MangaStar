import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
export const Item = (props) => {
  const nP = props.newPrice;
  // const [cutOldPrice,setCutOldPrice] = React.useState(true);
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt="404" style={{height:'300px'}} onClick={()=>{window.scrollTo(0,0)}}/> </Link>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className={nP?"item-old-price":"item-price"}>
              ₹ {props.price}
            </div>
            <div className='item-new-price'>
            {props.newPrice?"₹ "+props.newPrice : null}
            </div>
        </div>
    </div>
  )
}
