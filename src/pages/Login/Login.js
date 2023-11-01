import React, { useState } from 'react';
import twitterImage from "../../assets/images/twitter.jpeg";
import TwitterIcon from '@mui/icons-material/Twitter';
import auth from '../../firebase.init';
import {useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useSignInWithMicrosoft} from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
const Login =()=>{
    const navigate=useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    // const[error,setError]=useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(
        auth
      );
      if(user || googleUser){
        navigate('/');
        
      console.log(user);
      }
      if(error){
        console.log(error.message);
      }
      if(loading){
        console.log('loading...');
      }
    function handleSubmit(e){
        e.preventDefault();
        console.log('clicked');
        signInWithEmailAndPassword(email, password);
    }
    function handleGoogelSignIn(){
        signInWithGoogle();
    }
    return(
        <div className='login-container'>
        <div className='image-container'>
            <img src={twitterImage} alt='' className='image'></img>
        </div>
        
        <div className='form-container'>
           <div className='form-box '>
           <TwitterIcon style={{color:'skyblue'}}/>
            <h2 className='heading'>Happening now</h2>
            <h3 className='heading1'>
                What's Happening Today
            </h3>
            <form onSubmit={handleSubmit}>
                <input type='email' className='email' placeholder='Email-Address' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                <input type='password' className='password' placeholder='Password' value={password} onChange={(ev)=>{setPassword(ev.target.value)}}></input>
                <div className='btn-login'>
                    <button type='submit' className='btn'>Login</button>
                </div>
            </form>
           </div>
           <hr>

        </hr>

        <div className='google-button'>
                <GoogleButton
                className='g-btn'
                type='light'
                onClick={handleGoogelSignIn}
                 />
            </div>
            <div>
                Dont have an account ?
                <Link to='/signup' style={{
                    textDecoration:'none',
                    color:'blue',
                    fontWeight:'600',
                    marginLeft:'5px'
                }}>Signup</Link>
            </div>
        </div>
        
        
        </div>

    );
}

export default Login;