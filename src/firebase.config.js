import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBTN4m5SQetF42N2bvB3iyzd_j2qTGvtRU",
  authDomain: "smart-educattion-a8ac1.firebaseapp.com",
  projectId: "smart-educattion-a8ac1",
  storageBucket: "smart-educattion-a8ac1.appspot.com",
  messagingSenderId: "492323042719",
  appId: "1:492323042719:web:783f77048a422aa0fd79aa",
  measurementId: "G-VDYHV04VM9"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;