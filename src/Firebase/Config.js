import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import  'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfp_PxSvc7QSMpxQfJ6hILUKtBeHCtp2U",
    authDomain: "olx-user-details.firebaseapp.com",
    projectId: "olx-user-details",
    storageBucket: "olx-user-details.appspot.com",
    messagingSenderId: "825257646653",
    appId: "1:825257646653:web:7b1b302f151d1f5286a854",
    measurementId: "G-Y1X9Q7WVTR"
  };

  export default firebase.initializeApp(firebaseConfig)