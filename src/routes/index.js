import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import FoodSpecifics from '../components/FoodSpecifics'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/food/:number" exact component={FoodSpecifics}/>
  </Switch>
);

export default Routes;
