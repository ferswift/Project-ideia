// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgjrohrKoKET2tZMjyx6CtzPbiCTjlqlI",
  authDomain: "projeto-1-cbbfa.firebaseapp.com",
  projectId: "projeto-1-cbbfa",
  storageBucket: "projeto-1-cbbfa.firebasestorage.app",
  messagingSenderId: "274869297506",
  appId: "1:274869297506:web:3dd138fb74e02281474c3b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
