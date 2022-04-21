// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, uploadBytes } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBdrdB-qHqoyqPBuLv8WTEOc95dgRhmzGU",
    authDomain: "hotstar-clone-994c4.firebaseapp.com",
    projectId: "hotstar-clone-994c4",
    storageBucket: "hotstar-clone-994c4.appspot.com",
    messagingSenderId: "214207026868",
    appId: "1:214207026868:web:947bc12f5af46d14b269e1",
    measurementId: "G-CJEZKPF8SR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, 'movies')

export default db;
export { colRef }