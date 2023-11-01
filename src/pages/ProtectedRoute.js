import React  from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Navigate } from "react-router";
import PageLoading from "./PageLoading";

function ProtectedRoute ({children}){
    const [user,isLoading]=useAuthState(auth);
    if(isLoading){
        console.log(user);
        return <PageLoading/> 

    }
    if(!user){
        return(<Navigate to='/login'/>)
    }
    return(children);
}

export default ProtectedRoute;