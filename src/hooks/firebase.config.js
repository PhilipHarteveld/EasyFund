// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuWvYFffj-uQ86uPvDgNAFe7mJh6e7GHw",
  authDomain: "easyfund-c2689.firebaseapp.com",
  projectId: "easyfund-c2689",
  storageBucket: "easyfund-c2689.appspot.com",
  messagingSenderId: "602081423709",
  appId: "1:602081423709:web:809bcad93e039b2b71f8b4",
  measurementId: "G-B97DFD23N0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
