import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-Icpm4mCPNeet5RYsqck0ibUGjG2QeHA",
  authDomain: "emir-firebase-3bead.firebaseapp.com",
  projectId: "emir-firebase-3bead",
  storageBucket: "emir-firebase-3bead.appspot.com",
  messagingSenderId: "1017122864826",
  appId: "1:1017122864826:web:96eb8aa5f243fc08124c83",
  measurementId: "G-WK4K3GL95C",
};

// Инициализируем Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
