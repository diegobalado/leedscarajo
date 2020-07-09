import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Positions from '../components/Positions';
import Fixture from '../components/Fixture';
import Home from '../components/Home';
import Bettings from '../components/Bettings';

const Routes = () => 
  <Switch>
    <Route path={`${process.env.PUBLIC_URL}/home`}>
      <Home />
    </Route>
    <Route path={`${process.env.PUBLIC_URL}/positions`}>
      <Positions />
    </Route>
    <Route path={`${process.env.PUBLIC_URL}/fixture`}>
      <Fixture />
    </Route>
    <Route path={`${process.env.PUBLIC_URL}/bettings`}>
      <Bettings />
    </Route>
  </Switch>;

export default Routes;