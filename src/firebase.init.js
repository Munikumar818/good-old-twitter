// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB6SELtaORRGAtPGE-qwAKe6E3sZVKTGU8",
  authDomain: "twitterclone-7159f.firebaseapp.com",
  projectId: "twitterclone-7159f",
  storageBucket: "twitterclone-7159f.appspot.com",
  messagingSenderId: "714971345754",
  appId: "1:714971345754:web:4b24c056b16b18a4c8b963",
  measurementId: "G-5ZZCVNLLLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;