import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCEin_ElpJhE_Ir6OdlyzF_IQOGtKEktM0",
    authDomain: "alexithymia-41ca0.firebaseapp.com",
    databaseURL: "https://alexithymia-41ca0-default-rtdb.firebaseio.com",
    projectId: "alexithymia-41ca0",
    storageBucket: "alexithymia-41ca0.appspot.com",
    messagingSenderId: "783835003645",
    appId: "1:783835003645:web:3a8946ae15ac0809e0dc94"
  };

var firebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebaseApp.firestore();

export default db;
