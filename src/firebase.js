import firebase, { initializeApp } from "firebase/compat/app";
// import auth (authentication/authorization) from firebase
import "firebase/compat/auth"
// import firestore (database) from firebase
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCxuq7k9etcQGTWZqSUSA76MWfYE9AuyGM",
  authDomain: "react1-movies.firebaseapp.com",
  projectId: "react1-movies",
  storageBucket: "react1-movies.appspot.com",
  messagingSenderId: "36301784813",
  appId: "1:36301784813:web:7e69f75eda91b590f66ee4",
  measurementId: "G-HQGZ72DS90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()

export { auth, db, app}
