import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Positions from '../components/Positions';
import Fixture from '../components/Fixture';

const Routes = () => 
  <Switch>
    <Route path="/" exact={true}>
      <Positions />
    </Route>
    <Route path="/fixture">
      <Fixture />
    </Route>
  </Switch>

export default Routes;