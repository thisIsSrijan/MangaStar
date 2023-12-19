import React, { useContext , useState} from 'react'
import './ProductDisplay.css'
import starIcon from '../Assets/star_icon.png'
import starDullIcon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [coverChoice , setCoverChoice] =useState('');
    const [showMessage , setShowMessage] = useState(false);
    // const [message , setMessage] = useState(null);
    const addToCartHandler = ()=>{
        addToCart(product.id);
        setShowMessage(true);
        // setMessage('Added to Cart. Visit Cart to Checkout!');
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    }
  return (
    <div className='productdisplay'>
        <div className='productdispay-left'>
            <div className='productdisplay-image'>
            <img src={product.image} alt="404" className='productdisplay-main-image' style={{height:'500px'}}/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={starIcon} alt=''/>
                <img src={starIcon} alt=''/>
                <img src={starIcon} alt=''/>
                <img src={starIcon} alt=''/>
                <img src={starDullIcon} alt=''/>
                <p>(1071)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className={product.newPrice?"productdisplay-right-price-old1":"productdisplay-right-price-old2"}>
                ₹{product.price}
                </div>
                <div className='productdisplay-right-price-new'>
                {product.newPrice?"₹"+product.newPrice:null}
                </div>
            </div>
            <div className='productdisplay-right-description'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className='productdisplay-right-type'>
                <h1>select manga type</h1>
                <div className='productdisplay-right-type-choice'>
                    <div onClick={()=>{setCoverChoice('Paperback')}} className={coverChoice==='Paperback'?'selectedCover':null} >Paperback</div>
                    <div onClick={()=>{setCoverChoice('Hardcover')}} className={coverChoice==='Hardcover'?'selectedCover':null}>HardCover</div>
                </div>
            </div>
            <button className='add-to-cart' onClick={()=>{addToCartHandler()}}>
                ADD TO CART
            </button>
            <h6>{showMessage?"Added to cart, visit cart to checkout.":null}</h6>
            <p className='productdisplay-right-category'><span>Category: </span>{product.category}</p>
            <p className='productdisplay-right-category'><span>Tags: </span>egghead</p>
        </div>
    </div>
  )
}
