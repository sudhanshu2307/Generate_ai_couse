// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "aicousegen.firebaseapp.com",
  projectId: "aicousegen",
  storageBucket: "aicousegen.appspot.com",
  messagingSenderId: "869835476921",
  appId: "1:869835476921:web:ffe7a059ca261cc7b6b068",
  measurementId: "G-Y5PVVZQLRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
