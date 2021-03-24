/*
  Ce fichier contient les variables de configuration
  reliées à Firebase et ses produits.
*/

// Configuration Firebase (mettez-y les vôtres !)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPHD2u1jjZfQ4d-W5qKImDKg1I9BalT4U",
  authDomain: "panier-achat-acl.firebaseapp.com",
  databaseURL: "https://panier-achat-acl-default-rtdb.firebaseio.com",
  projectId: "panier-achat-acl",
  storageBucket: "panier-achat-acl.appspot.com",
  messagingSenderId: "1051741793466",
  appId: "1:1051741793466:web:00c250df23fef605f36683",
  measurementId: "G-CXL0KG70X8"
};
export default firebaseConfig;

// Nom de la collection principale
export const utilRef = "utilisateurs-ex5";
// Nom de la sous-collection
export const dossRef = "dossiers";