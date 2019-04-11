import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';
import firebase from '../Firebase/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class Form extends Component {
  render() {
    return (
      <div className='col-md-5 mx-1 mt-2' id='formContainer'>
        <div className='row'>
          <div className='col'>
            <h3> Log-in/Sign up</h3>
            <div className='App'>
              {this.props.isSignedIn ? (
                <Redirect to={{ pathname: '/images' }} />
              ) : (
                <StyledFirebaseAuth
                  uiConfig={this.props.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
