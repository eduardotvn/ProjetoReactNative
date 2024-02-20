// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection, getDocs, doc, addDoc, query, where } from 'firebase/firestore'
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

const dailySpendDB = collection(db, 'dailySpend')
const PlanningDB = collection(db, 'plannings')

export const addDailySpendData = (data) => {

  addDoc(dailySpendDB, {
    Date: data.day,
    Hour: data.hour,
    Amount: data.amount,
    Category: data.category,
    UserUID: data.uid,
  })
    .then(() => {
      console.log("Succesfuly created!")
    })
    .catch((error) => {
      console.log(error.message);
    })
} 

export const getDailySpendDataByUserUID = async (userUID, selectedDate) => {
  try {
    const q = query(
      dailySpendDB,
      where('UserUID', '==', userUID),
      where('Date', '==', selectedDate) 
    );
    const querySnapshot = await getDocs(q);

    const documents = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return documents;
  } catch (error) {
    console.error('Error getting documents:', error.message);
    throw error;
  }
};

export const addPlanningData = (data) => {

  addDoc(PlanningDB, {
    Type: data.type,
    Category: data.category,
    UserUID: data.uid,
    Duration: data.duration,
    Date: data.date,
    Goal: data.goal, 
  })
    .then(() => {
      console.log("Succesfuly created!")
    })
    .catch((error) => {
      console.log(error.message);
    })
} 