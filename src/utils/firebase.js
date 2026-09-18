import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeOTLD29S0uhgVSfHj-YDcMDdho2ejAdQ",
  authDomain: "tejaszerox-60623.firebaseapp.com",
  projectId: "tejaszerox-60623",
  storageBucket: "tejaszerox-60623.firebasestorage.app",
  messagingSenderId: "909463341808",
  appId: "1:909463341808:web:6fcb41de373882453cd035",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);