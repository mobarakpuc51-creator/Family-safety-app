import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj7maF9K4-QJ_XcgrI1wNvdWz6jzqRzEM",
  authDomain: "family-safety-app-4cafd.firebaseapp.com",
  projectId: "family-safety-app-4cafd",
  storageBucket: "family-safety-app-4cafd.firebasestorage.app",
  messagingSenderId: "438429766732",
  appId: "1:438429766732:web:78ee209584eaf82e1ad0e9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
