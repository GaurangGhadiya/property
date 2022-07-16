import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfWa518dDsN2Bwe0RqffMRRFcDDN0mzJs",
  authDomain: "saarthicarz-user.firebaseapp.com",
  projectId: "saarthicarz-user",
  storageBucket: "saarthicarz-user.appspot.com",
  messagingSenderId: "66781588972",
  appId: "1:66781588972:web:42dc1a10f6e3dfe2b724c9",
  measurementId: "G-Y9XFRP2K4Q",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app, auth}