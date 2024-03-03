// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsd51TkwYxzt9X1k74HlsosZIw46q7Z5k",
  authDomain: "reacttmp.firebaseapp.com",
  projectId: "reacttmp",
  storageBucket: "reacttmp.appspot.com",
  messagingSenderId: "245897701277",
  appId: "1:245897701277:web:d598d824f0093ffad1f174",
  measurementId: "G-PDXPMJG3GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();