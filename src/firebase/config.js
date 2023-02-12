import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfBgVEmL9wLpvCzHxV_y-rlX2D9_6iPog",
  authDomain: "mymoney-7c33c.firebaseapp.com",
  projectId: "mymoney-7c33c",
  storageBucket: "mymoney-7c33c.appspot.com",
  messagingSenderId: "981950807157",
  appId: "1:981950807157:web:6a59b519acebe5df020c3c",
};

//init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;
export { projectFirestore, projectAuth, timestamp };
