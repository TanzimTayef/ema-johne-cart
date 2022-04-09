import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAVQRQemrTDZDyG-dVoGqjfqKFP82gOQl0",
  authDomain: "ema-john-simple-e57ce.firebaseapp.com",
  projectId: "ema-john-simple-e57ce",
  storageBucket: "ema-john-simple-e57ce.appspot.com",
  messagingSenderId: "854786931386",
  appId: "1:854786931386:web:ac57e4a973397c63dea083"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;