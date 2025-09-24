// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjyE_a-UxGpct-pWkFWwQLfebaGUmVfwM",
  authDomain: "bd-libras.firebaseapp.com",
  projectId: "bd-libras",
  storageBucket: "bd-libras.firebasestorage.app",
  messagingSenderId: "1060618587185",
  appId: "1:1060618587185:web:8bf6a8195298710de45910",
  measurementId: "G-E3QDGP8JG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);