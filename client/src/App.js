import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Pages
import About from './components/pages/About';
import Home from './components/pages/Home';
import Exercise from './components/pages/Exercise';
import Test from './components/pages/Test';
import Results from './components/pages/Results';
import ManagePlayers from './components/pages/ManagePlayers';

// Sates
import AlertState from './context/alert/AlertState'
import Authstate from './context/auth/AuthSate';
import PlayerState from './context/player/PlayerState';
import TestState from './context/test/TestState';
import ExerciseState from './context/exercise/exerciseState';

// Components
import Alerts from './components/layout/Alerts';
import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Regiser';
import PrivateRoute from './components/routing/PrivateRoute';

// Utils
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Authstate>
      <PlayerState>
        <AlertState>
          <TestState>
            <ExerciseState>
              <Router>
                <Fragment>
                  <Navbar />
                  <div className="container">
                    <Alerts />
                    <Switch>
                      <PrivateRoute exact path='/' component={Home} />

                      <Route exact path='/test' component={Test} />
                      <Route exact path='/exercise/:id' component={Exercise} />
                      <Route exact path='/results' component={Results} />
                      <Route exact path='/manage-players' component={ManagePlayers} />
                      <Route exact path='/about' component={About} />

                      <Route exact path='/register' component={Register} />
                      <Route exact path='/login' component={Login} />
                    </Switch>
                  </div>
                </Fragment>
              </Router>
            </ExerciseState>
          </TestState>
        </AlertState>
      </PlayerState>
    </Authstate>
  );
}

export default App;
