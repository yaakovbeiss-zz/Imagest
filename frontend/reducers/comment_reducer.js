import merge from 'lodash/merge';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_POST } from '../actions/post_actions';

const defaultState = Object.freeze({
  entities: {},
});

const CommentReducer = (state = defaultState, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST:

      const comments = action.payload.comments;
      return Object.assign({}, state, {
        entities: comments
      });
    case RECEIVE_COMMENT:
      const comment = action.comment;
      const commentableType = comment.commentable_type;
      let newState = merge({}, state);
      if (commentableType === 'Comment') {

        newState.entities[action.comment.commentable_id].comment_ids.push(action.comment.id);
      }
        newState.entities[comment.id] = comment;

      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
