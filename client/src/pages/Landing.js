import React, { Component } from 'react';
// import Footer from '../components/Footer';
import Title from '../components/Title';
import Form from '../components/Form';
import '../sass/colors.scss';
// import firebase from 'firebase';

require('dotenv').config();

class Landing extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <Title />
          <Form
            uiConfig={this.props.uiConfig}
            isSignedIn={this.props.isSignedIn}
            signOut={this.props.signOut}
          />
        </div>
      </div>
    );
  }
}

export default Landing;
