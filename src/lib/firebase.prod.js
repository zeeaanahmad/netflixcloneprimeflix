import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from '../seed'; // comment this after seed is done
//config
const config = {
    apiKey: "AIzaSyDxE4cBeJwHeqiOl4JlzatkRVrtMUrevpI",
    authDomain: "netflix-2ccde.firebaseapp.com",
    projectId: "netflix-2ccde",
    storageBucket: "netflix-2ccde.appspot.com",
    messagingSenderId: "777298696328",
    appId: "1:777298696328:web:24521be2c5a9cbbacee73d"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase); // comment this after seed is done


export { firebase };
