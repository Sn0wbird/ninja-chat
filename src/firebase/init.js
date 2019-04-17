import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialise Firebase (inside the script tag on firebase site)
  var config = {
    apiKey: "REMOVED",
    authDomain: "udemy-ninja-chat-48191.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-48191.firebaseio.com",
    projectId: "udemy-ninja-chat-48191",
    storageBucket: "udemy-ninja-chat-48191.appspot.com",
    messagingSenderId: "568746999974"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })


  export default firebaseApp.firestore()

