import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzNOrmbLx_9FPUNztwJsNcVEtWWuKHMww",
  authDomain: "react-firebase-auth-f1155.firebaseapp.com",
  projectId: "react-firebase-auth-f1155",
  storageBucket: "react-firebase-auth-f1155.appspot.com",
  messagingSenderId: "147087200440",
  appId: "1:147087200440:web:f5be959badc4f7fd56a44d",
};

const firebaseAuth = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseAuth);
export const db = getFirestore(firebaseAuth);
export const storage = getFirestore(firebaseAuth)

export default firebaseAuth;
