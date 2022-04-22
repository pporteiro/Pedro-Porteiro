// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL_tZvChccfLFKFmd5p0xjTcRbCPq_Kns",
  authDomain: "ecommerce-react-479c9.firebaseapp.com",
  projectId: "ecommerce-react-479c9",
  storageBucket: "ecommerce-react-479c9.appspot.com",
  messagingSenderId: "195597854311",
  appId: "1:195597854311:web:76552122143aceeb8d56c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoredb = getFirestore();
