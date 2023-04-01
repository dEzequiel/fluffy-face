/* 
  Este modulo es el encargado de conectarse a la base de datos de Firebase 
  y de exportar las funciones que se utilizarán para obtener los datos de la base de datos.

  Esos datos unicamente hacen referencia a la informacion de las marcas.
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-RRodeZffkWvt5aiSJKWpivdTPLu7Dcw",
  authDomain: "fluffy-face.firebaseapp.com",
  projectId: "fluffy-face",
  storageBucket: "fluffy-face.appspot.com",
  messagingSenderId: "900032114742",
  appId: "1:900032114742:web:a9dafc9c330cd97d0ba897",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get database.
const db = getFirestore();

// Get brands.
export const getBrands = async () => {
  const snapshot = await getDocs(collection(db, "brands"));
  return snapshot.docs.map((doc) => doc.data());
};

// Get brand by name.
export const getBrandByName = async (name) => {
  let collectionRef = collection(db, "brands");
  const q = query(collectionRef, where("name", "==", name));
  const entities = await getDocs(q);
  return entities.docs[0].data();
};
