
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJM9FUEYOAyQdBPukvzTJFJWnKvO8x0JE",
  authDomain: "assignment-9th.firebaseapp.com",
  projectId: "assignment-9th",
  storageBucket: "assignment-9th.appspot.com",
  messagingSenderId: "477018294150",
  appId: "1:477018294150:web:25b19ab422e6181b5d0e07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
