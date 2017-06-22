import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/app';
import { createPost, requestPosts, requestPost } from './actions/post_actions';


  const Root = ( {store} ) => {
    return (
        <Provider store={store}>
          <HashRouter>
            <App />
          </HashRouter>
        </Provider>
    );
  };


  document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

    window.getState = store.getState;
    window.createPost = createPost;
    window.requestPosts = requestPosts;
    window.requestPost = requestPost;
    window.dispatch = store.dispatch;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
  });
