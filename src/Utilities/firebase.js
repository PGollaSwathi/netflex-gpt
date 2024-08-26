// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-0BOc7fEhQ5Iih7cniBgnhpg1ZGLl4fI",
  authDomain: "netflex-b9a3e.firebaseapp.com",
  projectId: "netflex-b9a3e",
  storageBucket: "netflex-b9a3e.appspot.com",
  messagingSenderId: "511900298296",
  appId: "1:511900298296:web:78154a1c73c35b59c40acd",
  measurementId: "G-228FZ1007Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
