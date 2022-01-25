import { initializeApp } from 'firebase/app' //firebase-initializeApp
import { getAuth } from 'firebase/auth' //firebase-authentication
import { getFirestore } from 'firebase/firestore' //firebase-database
import { getStorage } from "firebase/storage"; //firebase-storage

const firebaseConfig = {
    apiKey: "AIzaSyA2hwhCvXvv7TF-uGER8Js-IA_uuUJznV8",
    authDomain: "blog-app-f096d.firebaseapp.com",
    projectId: "blog-app-f096d",
    storageBucket: "blog-app-f096d.appspot.com",
    messagingSenderId: "254894025791",
    appId: "1:254894025791:web:37e353acb13eefb6131c8a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage}


