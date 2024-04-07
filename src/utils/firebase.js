// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBqX90RY5Ly2ONL7kBiWGpcYJSwsIXSmk",
  authDomain: "netflixgpt-29c00.firebaseapp.com",
  projectId: "netflixgpt-29c00",
  storageBucket: "netflixgpt-29c00.appspot.com",
  messagingSenderId: "417783436011",
  appId: "1:417783436011:web:ab6fbb60528c0c732e64ae",
  measurementId: "G-JNWB9W3HEJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;
