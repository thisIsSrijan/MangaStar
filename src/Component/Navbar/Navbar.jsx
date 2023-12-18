import React, { useState } from 'react'
import './Navbar.css'
import logo_small from '../Assets/logo_small.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { SearchBar } from '../SearchBar/SearchBar'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const Navbar = () => {
  const[menu , setMenu] = useState("menu");
  const {getTotalCartItems , logged , setLogged , notifyLogout} = useContext(ShopContext);
  const logOutHandler = async ()=>{
    try{
      if(logged){
        await signOut(auth)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        notifyLogout()
        setLogged(false)
      }else{
        return
      }
    }catch(error){
      alert("something went wrong. Please try again later")
    }
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo_small} alt='logo' />
        <p>MangaStars</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Shop")}}><Link to='/'style={{textDecoration: 'none' , color:'#626262'}}>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Shonen")}}><Link to='/shonen' style={{textDecoration: 'none', color:'#626262'}}>Shonen</Link>{menu==="Shonen"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("RomCom")}}><Link to='/romcom' style={{textDecoration: 'none', color:'#626262'}}>RomCom</Link>{menu==="RomCom"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Shojo")}}><Link to='/shojo' style={{textDecoration: 'none', color:'#626262'}}>Shojo</Link>{menu==="Shojo"?<hr/>:<></>}</li>
      </ul>
      <div className='search-div'><SearchBar/></div>
      <div className='nav-login-cart'>
      <Link to={logged?'/':'/login'}><button onClick={()=>{logOutHandler()}}>{logged?'Log Out':'Log In'}</button></Link>
      <Link to='/cart'><img src={cart_icon} alt=''/></Link>
      <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;