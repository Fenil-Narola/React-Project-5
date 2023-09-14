// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1T3eVcepc3KwAGYxvwPeUuSR8o-lE7Tk",
  authDomain: "vite-contact-47308.firebaseapp.com",
  projectId: "vite-contact-47308",
  storageBucket: "vite-contact-47308.appspot.com",
  messagingSenderId: "193814860126",
  appId: "1:193814860126:web:32cbe919b2a846aeed7fcf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
