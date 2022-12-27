// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr3-czTv5oDNGfk0NCVbPLZiYrdX970yY",
  authDomain: "resumebuilder-tech2lite.firebaseapp.com",
  projectId: "resumebuilder-tech2lite",
  storageBucket: "resumebuilder-tech2lite.appspot.com",
  messagingSenderId: "733493589144",
  appId: "1:733493589144:web:d2b4e373a55b0441314ced",
  databaseURL: "https://resumebuilder-tech2lite-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase

export const app = firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database()