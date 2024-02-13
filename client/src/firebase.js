// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE || 'test' ,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN || 'test',
  projectId: "magia-en-palabras-efbd3" || 'test',
  storageBucket: "magia-en-palabras-efbd3.appspot.com" || 'test',
  messagingSenderId: "571670136331" || 'test',
  appId: "1:571670136331:web:f7f29bb41ac87771cf290e" || 'test'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth =  getAuth(app);