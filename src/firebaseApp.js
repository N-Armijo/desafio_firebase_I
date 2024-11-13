// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjhHGKafHxVAKye7tYJZV7eX3_IxLaxkk",
  authDomain: "desafio-firebase-c4da9.firebaseapp.com",
  projectId: "desafio-firebase-c4da9",
  storageBucket: "desafio-firebase-c4da9.firebasestorage.app",
  messagingSenderId: "22375631576",
  appId: "1:22375631576:web:21a1a0a143f19c818265ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const $db = getFirestore(app)

export { $db }