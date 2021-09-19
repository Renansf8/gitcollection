import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repositories from '../pages/Repositories';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/gitcollection" component={Dashboard} />
        <Route path="/repositories/:repository+" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
};
