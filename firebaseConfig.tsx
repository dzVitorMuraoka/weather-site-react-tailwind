// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3r7_SUY2J18vTHsXsz48CoO2xi6FXRe8",
  authDomain: "weather-site-18d6d.firebaseapp.com",
  projectId: "weather-site-18d6d",
  storageBucket: "weather-site-18d6d.firebasestorage.app",
  messagingSenderId: "612627680163",
  appId: "1:612627680163:web:90f5f30b0be8c481996816",
  measurementId: "G-XTLR579M3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export {analytics, db, auth, googleProvider}