// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmtjpeFZWM9Lqom6oEi9W03m1aarq-qWw",
  authDomain: "react-dragon-news-auth-5c5b1.firebaseapp.com",
  projectId: "react-dragon-news-auth-5c5b1",
  storageBucket: "react-dragon-news-auth-5c5b1.appspot.com",
  messagingSenderId: "290396423442",
  appId: "1:290396423442:web:b6e32747c8641e8d81dfcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;