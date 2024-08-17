// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgv0WP6mIZvmdmhySYNF-BSSFwipYeOws",
    authDomain: "project--07.firebaseapp.com",
    projectId: "project--07",
    storageBucket: "project--07.appspot.com",
    messagingSenderId: "197743159153",
    appId: "1:197743159153:web:a9efe90ab402eae41138d0",
    measurementId: "G-SWQ3SRR1TD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }