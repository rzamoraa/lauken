// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// Configuración de Firebase obtenida de Firebase Console
const firebaseConfig = {

    apiKey: "AIzaSyBWhsBAIQ-7lWHhME0OZhbcp5uO1xwn060",
  
    authDomain: "lauken-1a683.firebaseapp.com",
  
    projectId: "lauken-1a683",
  
    storageBucket: "lauken-1a683.appspot.com",
  
    messagingSenderId: "99404187034",
  
    appId: "1:99404187034:web:798ba6aeee7a698651e623",
  
    measurementId: "G-FKDG0L54Q5"
  
  };
  

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { analytics, database, ref, set };