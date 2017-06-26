import merge from 'lodash/merge';

import {
  RECEIVE_POST,
  RECEIVE_POSTS
} from '../actions/post_actions';

const defaultState = Object.freeze({
  entities: {},
  currentPost: null
});

const PostReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, {
        entities: action.posts
      });
    case RECEIVE_POST:
      const post = action.post;
      return merge({}, state, {
        entities: { [post.id]: post },
        currentPost: post.id
      });
    default:
      return state;
  }
};

export default PostReducer;
