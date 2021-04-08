import React from 'react';
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYGFUYvMc7xJAeQ3KaljmTkcAbflHUFUk",
  authDomain: "react-ecommerce-website-79c69.firebaseapp.com",
  databaseURL: "https://react-ecommerce-website-79c69-default-rtdb.firebaseio.com",
  projectId: "react-ecommerce-website-79c69",
  storageBucket: "react-ecommerce-website-79c69.appspot.com",
  messagingSenderId: "416712033347",
  appId: "1:416712033347:web:0834f4bd28ea9ff74280f6"
};
//initialize firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;  