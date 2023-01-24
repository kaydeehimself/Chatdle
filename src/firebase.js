import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJecNi1Edg5D8oCFORhWQBbUHFPaZdf80",
  authDomain: "tidechat-b7e90.firebaseapp.com",
  projectId: "tidechat-b7e90",
  storageBucket: "tidechat-b7e90.appspot.com",
  messagingSenderId: "1058973235627",
  appId: "1:1058973235627:web:00e72ac43307f5d3befaee",
  measurementId: "G-FF7FGW6012"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
