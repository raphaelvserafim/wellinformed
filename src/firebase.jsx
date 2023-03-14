import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
 


const firebaseConfig = {
    apiKey: "AIzaSyBxw8ir8z96BBSzeKZQ6Mw1RX520SeANwg",
    authDomain: "wellinformed-c154b.firebaseapp.com",
    projectId: "wellinformed-c154b",
    storageBucket: "wellinformed-c154b.appspot.com",
    messagingSenderId: "704142061898",
    appId: "1:704142061898:web:260ed9b5646195b718d1b3",
    measurementId: "G-DXPQPJYWK1"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const db = getFirestore();




export { analytics,auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile };
