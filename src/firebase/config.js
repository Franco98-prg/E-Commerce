// import
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// key
const firebaseConfig = {
  apiKey: "AIzaSyC_jvfin89rh2uYNjPis8a5SNygOffuyiI",
  authDomain: "e-commerce-kafea.firebaseapp.com",
  projectId: "e-commerce-kafea",
  storageBucket: "e-commerce-kafea.firebasestorage.app",
  messagingSenderId: "973582749244",
  appId: "1:973582749244:web:4fff7da9d95acff8313d39",
  measurementId: "G-J3G6NSGVMW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);