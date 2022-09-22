// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeA5yCToE6RGxcM4fBqTwCQLbH1f1zmlc",
  authDomain: "miniblog0.firebaseapp.com",
  projectId: "miniblog0",
  storageBucket: "miniblog0.appspot.com",
  messagingSenderId: "327281355833",
  appId: "1:327281355833:web:8411b3f2a1aa3e512c31e8",
  measurementId: "G-W4RQ2GGB5K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};