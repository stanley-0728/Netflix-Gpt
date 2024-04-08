// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdq_EldDsJkK6jvw4dfe3Wtfm5SDci9kU",
  authDomain: "ethereal-anthem-419408.firebaseapp.com",
  projectId: "ethereal-anthem-419408",
  storageBucket: "ethereal-anthem-419408.appspot.com",
  messagingSenderId: "174076551065",
  appId: "1:174076551065:web:c3ac7183be5722b64d3d08",
  measurementId: "G-VX2YR72CJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;
