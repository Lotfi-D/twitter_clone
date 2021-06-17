import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBNMrBKGpUBWoJHaPI64Rnj5JlDhnyvOfE",
    authDomain: "twitterclone-76e22.firebaseapp.com",
    projectId: "twitterclone-76e22",
    storageBucket: "twitterclone-76e22.appspot.com",
    messagingSenderId: "48903354657",
    appId: "1:48903354657:web:9dae90759eac07beed2660"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;