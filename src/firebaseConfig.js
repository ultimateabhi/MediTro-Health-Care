// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBjrpu1IWHDch4poYW8sLagfmPnI2TTTqQ",
  authDomain: "isha-appoint.firebaseapp.com",
  projectId: "isha-appoint",
  storageBucket: "isha-appoint.appspot.com",
  messagingSenderId: "31668656555",
  appId: "1:31668656555:web:d503a62b67abe0d4425aee",
  measurementId: "G-E7L32SFWDB"
};
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCz_SKNVJyG2lcwkhJprsC8kUpnkv4gPIY",
//   authDomain: "medirtro.firebaseapp.com",
//   projectId: "medirtro",
//   storageBucket: "medirtro.appspot.com",
//   messagingSenderId: "225023444715",
//   appId: "1:225023444715:web:fbb49dd9cedf1fff4d20ae",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);


export default auth;
