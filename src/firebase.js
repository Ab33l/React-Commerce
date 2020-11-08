import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlcRowbVgGoG8UaxH_JrLJT6vbuIHQL1I",
    authDomain: "soko-8a2b1.firebaseapp.com",
    databaseURL: "https://soko-8a2b1.firebaseio.com",
    projectId: "soko-8a2b1",
    storageBucket: "soko-8a2b1.appspot.com",
    messagingSenderId: "631402038627",
    appId: "1:631402038627:web:c538c7e2ffbc620292ff56",
    measurementId: "G-GH66WRC4SB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };