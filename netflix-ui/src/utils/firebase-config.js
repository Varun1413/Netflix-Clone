import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7j9ezmUvJHBPNN62lhg1aJ6dmR2LX8G0",
  authDomain: "netflix-clone3-d75d1.firebaseapp.com",
  projectId: "netflix-clone3-d75d1",
  storageBucket: "netflix-clone3-d75d1.appspot.com",
  messagingSenderId: "752295098959",
  appId: "1:752295098959:web:5e4857fa7a63c51caf083a",
  measurementId: "G-24CNS77TMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
