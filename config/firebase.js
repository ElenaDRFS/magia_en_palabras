// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getStorage } = require('firebase/storage');
const { getFirestore } = require('firebase/firestore');
const { getAuth } = require('firebase/auth');

require('dotenv').config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "magia-en-palabras-efbd3",
  storageBucket: "magia-en-palabras-efbd3.appspot.com",
  messagingSenderId: "571670136331",
  appId: "1:571670136331:web:f7f29bb41ac87771cf290e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth =  getAuth(app);

module.exports = {app, storage, db, auth}
