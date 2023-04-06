// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGkx1m9ULp2gIVyEfHj2ZHVPgnEKN-8WY",
  authDomain: "top-photo-tagging-439e1.firebaseapp.com",
  projectId: "top-photo-tagging-439e1",
  storageBucket: "top-photo-tagging-439e1.appspot.com",
  messagingSenderId: "770198789967",
  appId: "1:770198789967:web:bb492b814f690c3f2f6f3a",
  measurementId: "G-40QF0BX7DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);