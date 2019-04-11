import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Landing from './pages/Landing';
import Images from './pages/Images';
import Home from './pages/Home';
import Footer from './components/Footer';
import firebase from '../src/components/Firebase/firebase';

class App extends Component {
  state = {
    isSignedIn: false,
    currentItem: '',
    username: '',
    items: [],
    userID: '',
    user: null, // <-- add this line
  };

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isSignedIn: !!user,
          userID: user.id,
        });
        sessionStorage.setItem('userID', user.uid);
        return <Redirect to={{ pathname: '/images' }} />;
      } else {
        return <Redirect to={{ pathname: '/' }} />;
      }
    });
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          isSignedIn: false,
          userID: '',
        });
        return <Redirect to={{ pathname: '/' }} />;
      });
  };

  render() {
    console.log(this.state.isSignedIn);
    return (
      <Router>
        <div id='main'>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Landing
                  {...props}
                  isSignedIn={this.state.isSignedIn}
                  uiConfig={this.uiConfig}
                />
              )}
            />
            <Route
              exact
              path='/images'
              render={props => (
                <Images
                  {...props}
                  isSignedIn={this.state.isSignedIn}
                  signOut={this.signOut}
                  user={this.state.user}
                />
              )}
            />
            <Route exact path='/home' component={Home} signOut={this.signOut} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
