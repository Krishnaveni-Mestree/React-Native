// firebase/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBrPzLB1Fy428mlrE1QwuzDYahSP_bZdjA',
  authDomain: 'donation-application-ecfbb.firebaseapp.com',
  projectId: 'donation-application-ecfbb',
  storageBucket: 'donation-application-ecfbb.appspot.com',
  messagingSenderId: '766437184289',
  appId: '1:766437184289:web:b65f116979ad8d438fa460',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

export { auth };
