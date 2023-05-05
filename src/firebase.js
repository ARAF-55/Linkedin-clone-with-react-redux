import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDkak9zzGkrozk-UqS4eabojkwPt4eaZUo",
    authDomain: "linkedin-bee3b.firebaseapp.com",
    projectId: "linkedin-bee3b",
    storageBucket: "linkedin-bee3b.appspot.com",
    messagingSenderId: "786050496864",
    appId: "1:786050496864:web:d9f4e855c681a1a11a8605"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword };

