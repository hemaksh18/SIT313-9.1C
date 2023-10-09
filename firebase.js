// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAldg-uIVw8aqdDdk8zKjpFTAgAgDgAAfs",
    authDomain: "authentication-3e4f0.firebaseapp.com",
    projectId: "authentication-3e4f0",
    storageBucket: "authentication-3e4f0.appspot.com",
    messagingSenderId: "847635314791",
    appId: "1:847635314791:web:5517e67308d234bb3f3cc2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);