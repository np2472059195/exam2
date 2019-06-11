import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './views/login/login';
import mainPage from './views/main/mainPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" exact component={mainPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;