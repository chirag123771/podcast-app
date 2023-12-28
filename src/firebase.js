// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb6bhq41N29snlHWOoRi6ezDkxPr44D2E",
  authDomain: "podcast-app-c9058.firebaseapp.com",
  projectId: "podcast-app-c9058",
  storageBucket: "podcast-app-c9058.appspot.com",
  messagingSenderId: "406010243562",
  appId: "1:406010243562:web:f279f8cb428942562cea93",
  measurementId: "G-Y5BEB81LBP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
