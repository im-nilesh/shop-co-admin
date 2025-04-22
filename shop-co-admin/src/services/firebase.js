// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO5tJjOunLhHEMlTl7NTaNuHi1r5cDIRM",
  authDomain: "shop-co-78d16.firebaseapp.com",
  projectId: "shop-co-78d16",
  storageBucket: "shop-co-78d16.appspot.com",
  messagingSenderId: "1030482165306",
  appId: "1:1030482165306:web:9e00d4975a7e11bef4ff03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
