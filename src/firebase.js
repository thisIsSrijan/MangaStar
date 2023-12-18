// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//DONT STEAL PLEASE!!
const firebaseConfig = {
  apiKey: "AIzaSyCtkyafWEtYXwiDCcZcMaB0BCPTqKQFvj8",
  authDomain: "mangastars-99128.firebaseapp.com",
  projectId: "mangastars-99128",
  storageBucket: "mangastars-99128.appspot.com",
  messagingSenderId: "370256365940",
  appId: "1:370256365940:web:ac4cc2a321dcc594384421",
  measurementId: "G-363B0FXPDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const auth = getAuth()
export default app;