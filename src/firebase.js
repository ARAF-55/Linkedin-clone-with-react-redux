import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDkak9zzGkrozk-UqS4eabojkwPt4eaZUo",
    authDomain: "linkedin-bee3b.firebaseapp.com",
    projectId: "linkedin-bee3b",
    storageBucket: "linkedin-bee3b.appspot.com",
    messagingSenderId: "786050496864",
    appId: "1:786050496864:web:d9f4e855c681a1a11a8605"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


