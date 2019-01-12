import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';

import logo from './logo.svg';
import './Main.css';
import Navigation from '../Navigation/Navigation';

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="main-wrapper">
          <Navigation />

          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              {/* Redirect non-matching routes to '/' (home) */}
              <Route component={() =>
                <Redirect to="/"/>
              } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
