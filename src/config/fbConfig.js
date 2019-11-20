import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBUg4-3omZ059yPtlb3rVfEz31bx31V1gY",
  authDomain: "react-redux-marioplan-2fb30.firebaseapp.com",
  databaseURL: "https://react-redux-marioplan-2fb30.firebaseio.com",
  projectId: "react-redux-marioplan-2fb30",
  storageBucket: "react-redux-marioplan-2fb30.appspot.com",
  messagingSenderId: "252395290511",
  appId: "1:252395290511:web:50bbdc415f9a3aabe515fa",
  measurementId: "G-FD4V8PZ3LX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase; 