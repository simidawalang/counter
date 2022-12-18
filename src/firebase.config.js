import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzNOrmbLx_9FPUNztwJsNcVEtWWuKHMww",
  authDomain: "react-firebase-auth-f1155.firebaseapp.com",
  projectId: "react-firebase-auth-f1155",
  storageBucket: "react-firebase-auth-f1155.appspot.com",
  messagingSenderId: "147087200440",
  appId: "1:147087200440:web:f5be959badc4f7fd56a44d",
};

firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebase.auth();
const googleFirebaseAuth = new firebase.auth.GoogleAuthProvider();

export { firebaseAuth, googleFirebaseAuth };
