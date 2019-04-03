import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Images from './pages/Images';
import Nav from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/image' component={Images} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
