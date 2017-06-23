import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostReducer from './post_reducer';
import ImageReducer from './image_reducer';

export default combineReducers({
  session: SessionReducer,
  post: PostReducer,
  image: ImageReducer,
});
