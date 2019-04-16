import firebase from 'firebase';
require("dotenv").config();

const config = {
    apiKey: "AIzaSyDkgcnwM87zO3ZAw1D9GYpatAq_dWUM_I4",
    authDomain: "captionthis-auth.firebaseapp.com",
    databaseURL: "https://pixafinder.firebaseio.com",
    projectId: "pixafinder",
    storageBucket: "pixafinder.appspot.com",
    messagingSenderId: 4532345391321
  };

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;