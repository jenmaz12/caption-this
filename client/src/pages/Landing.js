import React, { Component } from 'react';
import Footer from "../components/Footer";
import Title from '../components/Title';
import Form from '../components/Form';
import '../sass/colors.scss';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// import Footer from '../components/Footer';
// import API from '../utils/API';
// import { Col, Row, Container } from '../components/Grid';

// const divStyle = {
//   'font-family': "'Quattrocento', serif",
//   'font-weight': 'bold',
//   color: '#061323',
// };
firebase.initializeApp({
  apiKey: "AIzaSyDkgcnwM87zO3ZAw1D9GYpatAq_dWUM_I4",
  authDomain: "captionthis-auth.firebaseapp.com"
})

class Home extends Component {
  state = { isSignedIn: false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions:[
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount = () => {
  

    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user})
    })
  }


  // state = {
  //   userName: '',
  //   password: '',
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleFormSubmit = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  // };

  render() {
    return (
      <div className="App">
      {this.state.isSignedIn ? (
        <span>
        <div>Signed in!</div>
        <button onClick={()=>firebase.auth.signOut()}>Sign out</button>
        </span>
      ) : (
        <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
        />
      )}
      </div>
      // <div className='container'>
      //   <div className='row justify-content-center'>
      //     <Title />
      //     <Form
      //       handleInputChange={this.handleInputChange}
      //       handleFormSubmit={this.handleFormSubmit}
      //       userName={this.state.userName}
      //       password={this.state.password}
      //     />
      //   </div>
      // </div>
    );
  }
}

export default Home;
