import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCwLLmXcXvLsINP5dFWitfjCCsx1uOnMZ0",
  authDomain: "king-4ab3c.firebaseapp.com",
  databaseURL: "https://king-4ab3c-default-rtdb.firebaseio.com/",
  projectId: "king-4ab3c",
  storageBucket: "king-4ab3c.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789012345678"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);