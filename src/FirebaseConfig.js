import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD77l8AjUdWyQDsf2PWP7QnUGWAL8X_DDk",
  authDomain: "tienda-dc.firebaseapp.com",
  projectId: "tienda-dc",
  storageBucket: "tienda-dc.firebasestorage.app",
  messagingSenderId: "598739863182",
  appId: "1:598739863182:web:cd83760765421f26786bdf",
  measurementId: "G-HJXX80H7B1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);