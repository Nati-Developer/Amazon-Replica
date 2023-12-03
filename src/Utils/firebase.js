import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA72hQjWMkk7CdMWd2ZkOV56yALuYAMKsg",
  authDomain: "nati-a5548.firebaseapp.com",
  projectId: "nati-a5548",
  storageBucket: "nati-a5548.appspot.com",
  messagingSenderId: "527003570534",
  appId: "1:527003570534:web:d99a521bb3f72ea22178a7",
  measurementId: "G-WQ27GLVQ67"
};

// for backend
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };





// for backend


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



