// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCthcnY9zksfgOk3DiVXyp1n1-U-EeEW4M",
  authDomain: "it-sysarch32-store-rontale.firebaseapp.com",
  projectId: "it-sysarch32-store-rontale",
  storageBucket: "it-sysarch32-store-rontale.appspot.com",
  messagingSenderId: "396450626557",
  appId: "1:396450626557:web:d1f772998ab07b30827794",
  measurementId: "G-JNVLXDWQ9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
