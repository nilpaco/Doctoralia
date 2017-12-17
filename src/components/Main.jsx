import React from 'react';
import { Route, Switch } from 'react-router';

import LoginPage from './LoginPage';
import Home from './Home';
import { PrivateRoute } from './PrivateRoute';

const Main = () => (
    <main>
      <Switch>
        <PrivateRoute exact path='/' component={Home}/>
        <Route path='/login' component={LoginPage}/>
    	</Switch>
    </main>
  )
  
  export default Main
  