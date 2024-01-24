// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhWdDP1PkY46Bw1c21KiJyEQkh2uMWoxc",
  authDomain: "personal-927ed.firebaseapp.com",
  projectId: "personal-927ed",
  storageBucket: "personal-927ed.appspot.com",
  messagingSenderId: "243984954471",
  appId: "1:243984954471:web:0794a13f0f922d5ec650c2",
  measurementId: "G-VH7N32DDHW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
