import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

require('dotenv').config();


const firebaseApiKey = process.env.firebaseApiKey;
const firebaseAuthDomain = process.env.firebaseAuthDomain;
const firebaseProjectId = process.env.firebaseProjectId;
const firebaseStorageBucket = process.env.firebaseStorageBucket;
const firebaseMessagingSenderId = process.env.firebaseMessagingSenderId;
const firebaseAppId = process.env.firebaseAppId;
const firebaseMeasurementId = process.env.firebaseMeasurementId;
  
const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: firebaseAuthDomain,
    projectId: firebaseProjectId,
    storageBucket: firebaseStorageBucket,
    messagingSenderId: firebaseMessagingSenderId,
    appId: firebaseAppId,
    measurementId: firebaseMeasurementId
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();




export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile };
