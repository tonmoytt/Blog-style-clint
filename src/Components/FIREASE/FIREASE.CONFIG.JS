 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj1FIYFOBdWOJLvQWiLOt18Dpx8EXE6e8",
  authDomain: "blog-eeafd.firebaseapp.com",
  projectId: "blog-eeafd",
  storageBucket: "blog-eeafd.appspot.com",
  messagingSenderId: "646262285966",
  appId: "1:646262285966:web:b60b3b3425d9f445634bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;