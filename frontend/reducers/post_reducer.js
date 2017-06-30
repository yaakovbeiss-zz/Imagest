import merge from 'lodash/merge';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions';
import { RECEIVE_SEARCH } from '../actions/search_actions';

const defaultState = {
  entities: {},
  currentPost: null
};

const PostReducer = (state = defaultState, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, {
        entities: action.posts
      });
    case RECEIVE_POST:
      const post = action.payload.post;
      return merge({}, state, {
        entities: { [post.id]: post },
        currentPost: post.id
      });
    case RECEIVE_SEARCH:
      
      return merge({}, {
        entities: action.results
      });
    case RECEIVE_COMMENT:

      const commentableType = action.comment.commentable_type;
      if (commentableType === 'Post') {
        const newState = merge({}, state);
        newState.entities[action.comment.commentable_id].comment_ids.push(action.comment.id);
        return newState;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default PostReducer;
