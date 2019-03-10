import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import FilmsPage from './FilmsPage';
import PeoplePage from './PeoplePage';
import CategoryPage from './CategoryPage';

import './App.css';

const allowedCategories = [
  'people', 'films', 'starships'
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Star Wars</h1>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/films">Films</NavLink>
        <NavLink to="/people">People</NavLink>

        <section>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/films" component={FilmsPage} />
            <Route exact path="/people" component={PeoplePage} />
            <Route exact path={`/:category(${ allowedCategories.join('|') })`} component={CategoryPage} />
            <Route render={() => <h1>Page not found</h1>}/>
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
