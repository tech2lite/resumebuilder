// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr3-czTv5oDNGfk0NCVbPLZiYrdX970yY",
  authDomain: "resumebuilder-tech2lite.firebaseapp.com",
  projectId: "resumebuilder-tech2lite",
  storageBucket: "resumebuilder-tech2lite.appspot.com",
  messagingSenderId: "733493589144",
  appId: "1:733493589144:web:d2b4e373a55b0441314ced"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app