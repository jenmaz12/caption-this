import React from 'react';
import './style.scss';
import firebase from "../Firebase/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


function Form({ isSignedIn, signOut, uiConfig }) {
  return (
    <div className='col-md-5 mx-1 mt-2' id='formContainer'>
      <div className='row'>
        <div className='col'>
          <h3> Log-in/Sign up</h3>
          <div className="App">
            {isSignedIn ? (
            <span>
              <div>Signed in!</div>
              <button onClick={() => signOut()}>Sign out</button>
            </span>
          ) : (
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;