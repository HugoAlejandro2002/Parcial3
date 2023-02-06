import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAaD3qa7uHsxpNfH71cV5fb5MQRXai7WOo",
  authDomain: "reactnativetienda.firebaseapp.com",
  projectId: "reactnativetienda",
  storageBucket: "reactnativetienda.appspot.com",
  messagingSenderId: "386892904831",
  appId: "1:386892904831:web:b559172c4cbd3c98de424a",
  measurementId: "G-MNGRRBSNKR"
};

export const initFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(initFirebase);
export const db = getFirestore(initFirebase);