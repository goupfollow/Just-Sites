// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5FVM2_k0Th9kgDnalFXy5hDKPK-8i4do",
  authDomain: "goupfollow-panel.firebaseapp.com",
  projectId: "goupfollow-panel",
  storageBucket: "goupfollow-panel.firebasestorage.app",
  messagingSenderId: "128277190466",
  appId: "1:128277190466:web:41661725d3be8bed455adb",
  measurementId: "G-GW6FDJ39XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);