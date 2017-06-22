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
import PostsIndexContainer from './posts/posts_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <header>
        <PostsIndexContainer />
      </header>

    <Switch>
      <Route exact path="/login" component={SessionFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route path="/" component={Header} />
      <Route path="/" component={PostsIndexContainer} />
    </Switch>
  </div>
);

export default App;
