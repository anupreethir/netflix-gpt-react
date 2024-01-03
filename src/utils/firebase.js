// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyALfiPmA5WwnWU6yFYLW3zmwbIUmxZEnkk",
//     authDomain: "netflixgpt-4d3c5.firebaseapp.com",
//     projectId: "netflixgpt-4d3c5",
//     storageBucket: "netflixgpt-4d3c5.appspot.com",
//     messagingSenderId: "54990685913",
//     appId: "1:54990685913:web:41426084b91bf26c3f60c8",
//     measurementId: "G-2PYZ4FSS1F"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALfiPmA5WwnWU6yFYLW3zmwbIUmxZEnkk",
    authDomain: "netflixgpt-4d3c5.firebaseapp.com",
    projectId: "netflixgpt-4d3c5",
    storageBucket: "netflixgpt-4d3c5.appspot.com",
    messagingSenderId: "54990685913",
    appId: "1:54990685913:web:41426084b91bf26c3f60c8",
    measurementId: "G-2PYZ4FSS1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();