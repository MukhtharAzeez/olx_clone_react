import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpMH51mDKctVf5g7PEw1Y-IBjhoDc5H5U",
    authDomain: "fir-35dad.firebaseapp.com",
    projectId: "fir-35dad",
    storageBucket: "fir-35dad.appspot.com",
    messagingSenderId: "1016065824361",
    appId: "1:1016065824361:web:a5b847ef2852d0308a34f8",
    measurementId: "G-67YXDZSNNG"
  };

  export default firebase.initializeApp(firebaseConfig)


