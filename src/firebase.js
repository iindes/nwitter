//#-- to use firebase app
// Solution 1: use the /compat folder in imports
// import firebase from "firebase/app"; //older version
import firebase from "firebase/compat/app"; //v9

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3mdFgoRTEpEzB0q2_JSkI2a1Aldy0n3E",
    authDomain: "nwitter-a1a10.firebaseapp.com",
    projectId: "nwitter-a1a10",
    storageBucket: "nwitter-a1a10.appspot.com",
    messagingSenderId: "59201163235",
    appId: "1:59201163235:web:aae2d05bd6ae21b5041ad6"
};

export default firebase.initializeApp(firebaseConfig);