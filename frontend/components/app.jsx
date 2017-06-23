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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridListExampleSimple from './posts/grid_list';

const App = () => (
  <div>
      <header>
      </header>


    <Switch>
      <Route exact path="/login" component={SessionFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
      <Route path="/" component={Header} />
    </Switch>

    <PostsIndexContainer />


  </div>
);

export default App;
