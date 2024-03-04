// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
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
  appId: "1:245897701277:web:6426f7465f460263d1f174",
  measurementId: "G-D5S2952CEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);
export default getFirestore();