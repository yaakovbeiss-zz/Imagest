import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostReducer from './post_reducer';

export default combineReducers({
  session: SessionReducer,
  post: PostReducer
});
