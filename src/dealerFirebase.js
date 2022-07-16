import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from "firebase/compat/app";


const firebaseConfig2 = {
  apiKey: "AIzaSyBww1lPobrxXo2yBUIlLqTGxaWvJ9AWn9o",
  authDomain: "saarthicarz-dealer.firebaseapp.com",
  projectId: "saarthicarz-dealer",
  storageBucket: "saarthicarz-dealer.appspot.com",
  messagingSenderId: "572940701700",
  appId: "1:572940701700:web:eb3afde7bc3a4f85cd6551",
  measurementId: "G-RLZGYNK9L5",
};

const app = initializeApp(firebaseConfig2, "secondary");

const dealerauth = getAuth(app);

export { app, dealerauth };