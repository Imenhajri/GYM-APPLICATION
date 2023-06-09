import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBbZYBpsNdE1biXsVy5BgXFAwSRNTjqb28',
  authDomain: 'gym-app-43729.firebaseapp.com',
  projectId: 'gym-app-43729',
  storageBucket: 'gym-app-43729.appspot.com',
  messagingSenderId: '571761050062',
  appId: '1:571761050062:web:63c116076673b9f5aeab9f',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, signInWithPopup, provider };
