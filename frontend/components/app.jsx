import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
import Header from './header/header';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <header>
      </header>

    <Switch>
      <Route exact path="/login" component={SessionFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route path="/" component={Header} />
    </Switch>
  </div>
);

export default App;
