import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home';
import About from './components/pages/About';
import PlayerState from './context/player/PlayerState';

import './App.css';

function App() {
  return (
    <PlayerState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact paht='about' component={About}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </PlayerState>
  );
}

export default App;
