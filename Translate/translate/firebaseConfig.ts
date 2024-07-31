// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAasuVD4sNe9KP2IGwAmNaJvLJzGeVgH5Y",
  authDomain: "fir-chat-80086.firebaseapp.com",
  projectId: "fir-chat-80086",
  storageBucket: "fir-chat-80086.appspot.com",
  messagingSenderId: "226653794692",
  appId: "1:226653794692:web:47ff01622aed4111566dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app);

export const userRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms')