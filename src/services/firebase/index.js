// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCdLN8LL9KxBfi_zItGZ5b_3e1gCdlQ5iw",
  authDomain: "react-ecommercev2.firebaseapp.com",
  projectId: "react-ecommercev2",
  storageBucket: "react-ecommercev2.appspot.com",
  messagingSenderId: "146588719676",
  appId: "1:146588719676:web:a41af7b84d9b18dd040139",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoredb = getFirestore(app);
