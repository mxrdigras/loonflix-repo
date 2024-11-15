import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import loading_screen from '../../assets/loading_screen.gif'

const Login = () => {

  const [signState, setSignState] = useState("Sign In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const user_auth =  async (event)=>{
    event.preventDefault();
    setLoading(true);
    if (signState==="Sign In") {
      await login(email, password);
    }
    else {
      await signup(email, password);
    }
    setLoading(false);
  }


  return (
    loading?<div className="loading-spinner">
      <img src={loading_screen} alt=""></img>
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value)}} />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?
          <p>New to Loonflix?<span onClick={()=>{setSignState("Sign Up")}}>Sign up now</span>.</p>
            : <p>Already have account?<span onClick={() => { setSignState("Sign In")}}>Sign in now</span>.</p>
          }
        </div>
        </div>      
    </div>
  )
}

export default Login
