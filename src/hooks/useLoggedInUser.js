import react, { useEffect, useState } from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { set } from "mongoose";
export default function useLoggedInUser(){
    
        const [user] =useAuthState(auth);
        const email=user?.email;
        const[loggedInUser,setLoggedInUser]=useState({});

        useEffect(()=>{
            fetch(`https://twitter-backend-1.onrender.com/loggedInUser?email=${email}`).then(res=>res.json())
            .then(data=>{
                setLoggedInUser(data);
            })
        },[email,loggedInUser])

        return([loggedInUser,setLoggedInUser]);

    
}