import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import FilmsPage from './FilmsPage';
import PeoplePage from './PeoplePage';
import PersonPage from './PeoplePage/PersonPage';
import FilmPage from './FilmsPage/FilmPage'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Star Wars</h1>
        <div className="navLinks">
          <NavLink to="/" >Home</NavLink> <br />
          <NavLink to="/films">Films</NavLink> <br />
          <NavLink to="/people">People</NavLink> <br />
        </div>
        <section>
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route path={'/films/:id'} component={FilmPage} />
            <Route path={'/films'} component={FilmsPage} />
            <Route path={'/people/:id'} component={PersonPage} />
            <Route path={'/people'} component={PeoplePage} />

            <Route render={() => <h1>Page not found</h1>}/>
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
