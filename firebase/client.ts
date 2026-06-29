// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";






const firebaseConfig = {
  apiKey: "AIzaSyCGLwMLv80KluG8QlzBsUxj6SJn5EMCGLg",
  authDomain: "prepwise-60d36.firebaseapp.com",
  projectId: "prepwise-60d36",
  storageBucket: "prepwise-60d36.firebasestorage.app",
  messagingSenderId: "762422698852",
  appId: "1:762422698852:web:9a3a8ff8eef4ecdb625071",
  measurementId: "G-ZTLRJPKSD1"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
 