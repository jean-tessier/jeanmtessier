import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { Home, PersonalProjects, ProfessionalProjects } from '../Pages';

import './Main.scss';

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="main-wrapper">
          <Navigation />

          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/personal" component={PersonalProjects} />
              <Route path="/professional" component={ProfessionalProjects} />
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
