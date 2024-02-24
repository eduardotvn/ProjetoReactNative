// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection, getDocs, deleteDoc, doc, addDoc, query, where } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAydhCwMuAkdxfSESjt1APw4S6ncfPWSUY",
  authDomain: "appdindim.firebaseapp.com",
  projectId: "appdindim",
  storageBucket: "appdindim.appspot.com",
  messagingSenderId: "637111772484",
  appId: "1:637111772484:web:477c7080c62d76b60ca311",
  measurementId: "G-F4699FD18E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const appAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore();

export const dailySpendDB = collection(db, 'dailySpend')
export const PlanningDB = collection(db, 'plannings')
