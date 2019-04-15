import firebase from 'firebase';
require("dotenv").config();

const config = {
    apiKey: "10318573-0d69a875d",
    authDomain: "AIzaSyDkgcnwM87zO3ZAw1D9GYpatAq_dWUM_I4",
    databaseURL: "captionthis-auth.firebaseapp.com",
    projectId: "https://pixafinder.firebaseio.com",
    storageBucket: "pixafinder",
    messagingSenderId: 4532345391321
  };

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;