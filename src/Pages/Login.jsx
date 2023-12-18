import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { auth} from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './css/LoginSignUp.css'

export const Login = (e) => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const {setLogged , notifyLogin} = useContext(ShopContext)
  const navigate = useNavigate()
  // const notifyLogin = () => toast("You are now logged in!");
  const handleLogIn = async (e)=>{
    e.preventDefault()
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        localStorage.setItem('token',user.accessToken)
        localStorage.setItem('user',JSON.stringify(user))
        // alert("You are now logged in!")
        setLogged(true)
        navigate('/')
        notifyLogin()
    }catch(err){
      alert("Please check your credentials and try again")
      setLogged(false)
    }
  }

  return (
    <div className='loginsignup'>
    <div className='loginsignup-container'>
      <h1>Log In</h1>
      <div className='loginsignup-fields'>
        <input type='email' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
      <div>
      <button onClick={(e)=>{handleLogIn(e)}}>Log In</button>
      
      </div>
      <p className='loginsignup-login'>
        Don't have an account? <span><Link to='/signup' style={{color:"#ff4141"}}>Sign up</Link></span>
      </p>
    </div>
    </div>
  )
}
