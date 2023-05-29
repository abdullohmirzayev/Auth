import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGOxxwoDhsNT058ReBiMW-MZSeoT7Srn4",
  authDomain: "sammi-auth-b08a0.firebaseapp.com",
  projectId: "sammi-auth-b08a0",
  storageBucket: "sammi-auth-b08a0.appspot.com",
  messagingSenderId: "964904254270",
  appId: "1:964904254270:web:bef00c5e975eea28bfca6f",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth }