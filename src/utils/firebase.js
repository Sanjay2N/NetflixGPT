import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6NpCkVL5s1Owa18wifmH2HeR0TNTjd6Q",
  authDomain: "netflixgpt-2570c.firebaseapp.com",
  projectId: "netflixgpt-2570c",
  storageBucket: "netflixgpt-2570c.appspot.com",
  messagingSenderId: "222434120869",
  appId: "1:222434120869:web:5b0b5f0accf8e7d508e94c",
  measurementId: "G-BBYH1JFCEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
