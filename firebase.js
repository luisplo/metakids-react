// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const env = import.meta.env;
const firebaseConfig = {
    apiKey: env.VITE_API_KEY,
    authDomain: env.VITE_AUTH_DOMAIN,
    projectId: env.VITE_PROJECT_ID,
    storageBucket: env.VITE_PROJECT_ID,
    messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
    appId: env.VITE_APP_ID,
    measurementId: env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);