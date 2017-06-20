import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';

export default combineReducers({
  session: SessionReducer
});
