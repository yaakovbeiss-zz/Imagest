import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_ACCOUNT,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const nullUser = {
  currentaccount: null,
  errors: []
};

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_ACCOUNT:
      const currentaccount = action.currentaccount;
      return merge({}, nullUser, {
        currentaccount
      });
    case RECEIVE_ERRORS:

      const errors = action.errors;
      return merge({}, nullUser, {
        errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
