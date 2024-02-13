// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-7ae47.firebaseapp.com",
    projectId: "mern-blog-7ae47",
    storageBucket: "mern-blog-7ae47.appspot.com",
    messagingSenderId: "535923514090",
    appId: "1:535923514090:web:d559cee3dc8cebc05e1593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;