import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Images from './pages/Images';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/images' component={Images} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
