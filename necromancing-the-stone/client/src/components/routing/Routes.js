import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../auth/Register';
import Login from '../auth/Login';
import Home from '../auth/Home';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route path='/register'      component={Register} />
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/home' component={Home} />
      </Switch>
    </Fragment>
  );
};

export default Routes;