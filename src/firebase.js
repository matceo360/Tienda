import { getFirestore } from "firebase/firestore"
import { initializeApp } from "@firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_n3maT_ZmWHGXz4nH8eE8T4d56U8RXT4",
  authDomain: "base-datos-tienda2.firebaseapp.com",
  projectId: "base-datos-tienda2",
  storageBucket: "base-datos-tienda2.appspot.com",
  messagingSenderId: "982350226126",
  appId: "1:982350226126:web:b34b0b3bee80ccaa4da69f"
};
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);



