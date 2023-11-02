import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import VeganSearch from './VeganSearch';
import VegetarianSearch from './VegetarianSearch';
import VeganRecipe from './VeganRecipe';
import VegetarianRecipe from './VegetarianRecipe';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/veganSearch" component={VeganSearch} />
        <Route path="/vegetarianSearch" component={VegetarianSearch} />
        <Route path="/veganRecipe/:id" component={VeganRecipe} />
        <Route path="/vegetarianRecipe" component={VegetarianRecipe} />
      </Switch>
    </Router>
  );
}

export default App;
