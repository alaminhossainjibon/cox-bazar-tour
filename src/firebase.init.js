// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4kARrxtVpnt6DEqwvDPetDIiU3Th97IY",
    authDomain: "cox-bazar-tour.firebaseapp.com",
    projectId: "cox-bazar-tour",
    storageBucket: "cox-bazar-tour.appspot.com",
    messagingSenderId: "108884029821",
    appId: "1:108884029821:web:f1b6657d995ee4dbeddc14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;