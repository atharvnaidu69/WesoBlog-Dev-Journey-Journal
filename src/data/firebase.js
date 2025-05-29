// src/data/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD5GG6YQMHsVgeGS7WMLJq85fDzfc3hV0E",
  authDomain: "wesoblog.firebaseapp.com",
  projectId: "wesoblog",
  storageBucket: "wesoblog.appspot.com", // ❗️FIXED: was missing `.google`
  messagingSenderId: "172068705554",
  appId: "1:172068705554:web:7e57240b5fa6e825644fcb",
  measurementId: "G-RM7B6ZR48F"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firestore (no need for analytics unless you want tracking)
export const db = getFirestore(app);
