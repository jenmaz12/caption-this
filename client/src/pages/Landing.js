import React, { Component } from "react";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Form from "../components/Form";
import "../sass/colors.scss";
import firebase from "firebase";

require("dotenv").config();

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
      this.setState({
        isSignedIn: !!user, 
        userID: user.id 
      });
      sessionStorage.setItem("userID", user.uid);
      window.location = "/images";
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
      </div>
    )
  }

}

export default Home;