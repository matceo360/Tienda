import { getFirestore } from "firebase/firestore"
import { initializeApp } from "@firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8DhA1Ooth8hraQQ9ka6vouCYoXafahKM",
  authDomain: "base-de-datos-tienda-45869.firebaseapp.com",
  projectId: "base-de-datos-tienda-45869",
  storageBucket: "base-de-datos-tienda-45869.appspot.com",
  messagingSenderId: "347630284096",
  appId: "1:347630284096:web:30ffd18426b30e8167dea5"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);



