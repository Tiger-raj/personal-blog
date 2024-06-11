// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "personal-blog-f1be6.firebaseapp.com",
  projectId: "personal-blog-f1be6",
  storageBucket: "personal-blog-f1be6.appspot.com",
  messagingSenderId: "388970743534",
  appId: "1:388970743534:web:8d428b1dece3b45bb0d5ff",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
