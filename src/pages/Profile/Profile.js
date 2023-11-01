import React from "react";
import "../Page.css";
import MainPage from "./MainPage/MainPage";
import EditProfile from "./EditProfile/EditProfile";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Profile(){
    const [user]=useAuthState(auth);
    return(
        <div className="profilePage">
            <MainPage user={user}/>
            <EditProfile/>
        </div>
    )
}