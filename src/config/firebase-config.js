// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzZ4SpW5scdUr8bdu31eMIfgurJXp6QN0",
  authDomain: "expense-tracker-4ad29.firebaseapp.com",
  projectId: "expense-tracker-4ad29",
  storageBucket: "expense-tracker-4ad29.appspot.com",
  messagingSenderId: "588054433790",
  appId: "1:588054433790:web:cd28f5f92fde57b44b3aaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);