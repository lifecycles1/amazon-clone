//v8 syntax
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

//v9 syntax
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZss1-8cDnFLNo9MT9aGfxbzUCl_OrmPM",
  authDomain: "clone-71427.firebaseapp.com",
  projectId: "clone-71427",
  storageBucket: "clone-71427.appspot.com",
  messagingSenderId: "628042866052",
  appId: "1:628042866052:web:31576437d7be569b2c11d1",
};

// Initialize Firebase

//v8 syntax
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();

//v9 syntax
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();

export default db;
