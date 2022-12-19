import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzNOrmbLx_9FPUNztwJsNcVEtWWuKHMww",
  authDomain: "react-firebase-auth-f1155.firebaseapp.com",
  projectId: "react-firebase-auth-f1155",
  storageBucket: "react-firebase-auth-f1155.appspot.com",
  messagingSenderId: "147087200440",
  appId: "1:147087200440:web:f5be959badc4f7fd56a44d",
};
//init firebase app
initializeApp(firebaseConfig);

//init services
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
