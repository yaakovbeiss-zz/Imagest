import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostReducer from './post_reducer';
import ImageReducer from './image_reducer';
import CommentReducer from './comment_reducer';
import ModalReducer from './modal_reducer';
import SearchReducer from './search_reducer';
import AccountReducer from './account_reducer';

export default combineReducers({
  session: SessionReducer,
  post: PostReducer,
  image: ImageReducer,
  comment: CommentReducer,
  modal: ModalReducer,
  search: SearchReducer,
  accounts: AccountReducer,
});
