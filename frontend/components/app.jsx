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
import Header from './header/NavBar';
import PostsIndexContainer from './posts/posts_index_container';
import PostShowPageContainer from './posts/post_show_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (

  <div>

      <header>
        <Route path="/" component={Header} />
      </header>


    <Switch>
      <Route exact path="/" component={PostsIndexContainer} />
      <Route exact path="/posts" component={PostsIndexContainer} />
      <Route exact path="/posts/:postId" component={PostShowPageContainer} />
      <Route exact path="/login" component={SessionFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
    </Switch>





  </div>

);

export default App;
