// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoVE6XriKKh4b-Y-KntmPzY_Iw0T6o-2I",
  authDomain: "final-35ff1.firebaseapp.com",
  projectId: "final-35ff1",
  storageBucket: "final-35ff1.firebasestorage.app",
  messagingSenderId: "458006052441",
  appId: "1:458006052441:web:e561c5eff0f2869c927b48",
  measurementId: "G-DYN81PXLGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();