import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALByXBozUiz_pM8kqbQczm3zq8fTwGXOw",
  authDomain: "petfriends-b9906.firebaseapp.com",
  projectId: "petfriends-b9906",
  storageBucket: "petfriends-b9906.appspot.com",
  messagingSenderId: "507219362295",
  appId: "1:507219362295:web:796f8222eaa22c56f16ef2",
  measurementId: "G-C2C4ZQEYM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize authentication and firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
