import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { firebaseConfig } from "./config.js";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Provider
const provider = new GoogleAuthProvider();

// Google Login
export function googleLogin() {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Google user: ", result.user);
        })
        .catch((error) => {
            console.error(error);
        })
}
console.log("Firebase connected 🚀");
