// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChnMPSNK3x5v4GWxmQeWlizehG55gpFqY",
    authDomain: "cosmopedia-b1962.firebaseapp.com",
    projectId: "cosmopedia-b1962",
    storageBucket: "cosmopedia-b1962.firebasestorage.app",
    messagingSenderId: "279732595727",
    appId: "1:279732595727:web:002ee31949b5bf660b477a",
    measurementId: "G-003640R6BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
