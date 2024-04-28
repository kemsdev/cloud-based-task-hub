// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-2cfef.firebaseapp.com",
  projectId: "taskmanager-2cfef",
  storageBucket: "taskmanager-2cfef.appspot.com",
  messagingSenderId: "413338035214",
  appId: "1:413338035214:web:a796608c2946552857885f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);