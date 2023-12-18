import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth} from '../firebase'
import { createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import './css/LoginSignUp.css'

export const SignUp = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [name , setName] = useState('')
  const [termCheck , setTermCheck] = useState(false)
  const {setLogged , notifySignup} = useContext(ShopContext)
  const navigate = useNavigate()
  
  const handleSignUp = async (e)=>{
    e.preventDefault()
    try{
      if(!termCheck){
        alert('Please agree to the T&C')
        return
      }else{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        localStorage.setItem('token',user.accessToken)
        localStorage.setItem('user',JSON.stringify(user))
        notifySignup()
        setLogged(true)
        navigate('/')
      }
    }catch(err){
      alert(err.message)
      setLogged(false)
    }
  }

  return (
    <div className='loginsignup'>
    <div className='loginsignup-container'>
      <h1>Sign up</h1>
      <div className='loginsignup-fields'>
        <input type='text' placeholder='Kimi no na wa' value={name} onChange={(e)=>{setName(e.target.value)}}  />
        <input type='email' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <button onClick={(e)=>{handleSignUp(e)}}>Continue </button>
      <p className='loginsignup-login'>
        Already have an account? <span><Link to='/login' style={{color:"#ff4141"}}>Log in</Link></span>
      </p>
      <div className='loginsignup-agree'>
        <input type='checkbox' name='' id='' onClick={()=>{setTermCheck(prev=> !prev)}}/>
        <p>By continuing , I agree to the T&C</p>
      </div>
    </div>
    </div>
  )
}
