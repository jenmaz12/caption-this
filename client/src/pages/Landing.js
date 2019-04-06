import React, { Component } from "react";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Form from "../components/Form";
import "../sass/colors.scss";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

require("dotenv").config();


const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

class Home extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user, userID: user.id });
      sessionStorage.setItem("userID", user.uid);
    });
  };
  signOut = () => {
    firebase.auth().signOut();
    this.setState({ isSignedIn: false });
  };

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <Title />
          <Form
            uiConfig={this.uiConfig}
            isSignedIn={this.state.isSignedIn}
            signOut={this.signOut}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
