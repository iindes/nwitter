//#-- to use firebase app
// Solution 1: use the /compat folder in imports
// import firebase from "firebase/app"; //older version
import firebase from "firebase/compat/app"; //v9
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
// ko.javascript.info/import-export
// named export	default export
// export class User {...}	export default class User {...}
// import {User} from ...	import User from ...