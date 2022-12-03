import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDil3ZiXfixBaz5fcvR-ziZ0MgI5gb10kw",
  authDomain: "react-next-firebase-1.firebaseapp.com",
  projectId: "react-next-firebase-1",
  storageBucket: "react-next-firebase-1.appspot.com",
  messagingSenderId: "459157656462",
  appId: "1:459157656462:web:a593ef5a6e9c7606424adf",
  measurementId: "G-BKNKKGMBQH",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
