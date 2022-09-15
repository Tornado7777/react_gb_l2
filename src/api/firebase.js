// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmG4IdaCrrFkNuKZOJYlBXfxPeGhuiPTI",
  authDomain: "gb-react-chat-6a09an.firebaseapp.com",
  databaseURL: "https://gb-react-chat-6a09a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-react-chat-6a09a",
  storageBucket: "gb-react-chat-6a09a.appspot.com",
  messagingSenderId: "689156357986",
  appId: "1:689156357986:web:a706bb4e19e548d14ab63b",
  measurementId: "G-345G4G1L66"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);