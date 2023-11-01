import React, { useState } from 'react';
import twitterImage from "../../assets/images/twitter.jpeg";
import TwitterIcon from '@mui/icons-material/Twitter';
import auth from '../../firebase.init';
import {useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useSignInWithMicrosoft} from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";


function Signup (){

    const navigate=useNavigate();
    const[username,setUsername]=useState('');
    const[name,setName]=useState('');


    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    // const[error,setError]=useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(
        auth
      );

      if(user || googleUser){
        navigate('/login');
        console.log(user);
        console.log(googleUser);
        }
        if(error){
          console.log(error.message);
        }
        if(loading){
          console.log("loading...");
        }
    function handleSubmit(e){
        e.preventDefault();
        console.log('clicked');
        createUserWithEmailAndPassword(email, password);
        const user={
            username:username,
            name:name,
            email:email
        }

        const{data}=axios.post(`https://twitter-backend-1.onrender.com/register`,user);
        console.log(data);
    }

    function handleGoogelSignIn(){
        signInWithGoogle();
    }

    return(
        <div className='login-container'>
        <div className='image-container'>
            <img className='image' src={twitterImage} alt=''></img>
        </div>
        
        <div className='form-container'>
            <TwitterIcon className='Twittericon' style={{color:'skyblue'}}/>
            <h2 className='heading'>Happening now</h2>
            <h3 className='heading1'>
                Join Twitter Today
            </h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='@username' value={username} onChange={(e)=>{setUsername(e.target.value)}} className='display-name'></input>
                <input type='text' placeholder='Enter Fullname' value={name} onChange={(e)=>{setName(e.target.value)}} className='display-name'></input>
                <input type='email' className='email' placeholder='Email-Address' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                <input type='password' className='password' placeholder='Password' value={password} onChange={(ev)=>{setPassword(ev.target.value)}}></input>
                <div className='btn-login'>
                    <button type='submit' className='btn'>Signup</button>
                </div>
            </form>

            <hr />
            <div className='google-button'>
                <GoogleButton
                className='g-btn'
                type='light'
                onClick={handleGoogelSignIn}
                 />
            </div>
            <div>
                Already have an account ?
                <Link to='/login' style={{
                    textDecoration:'none',
                    color:'blue',
                    fontWeight:'600',
                    marginLeft:'5px'
                }}>Login</Link>
            </div>
        </div>
        </div>
    );
}

export default Signup;