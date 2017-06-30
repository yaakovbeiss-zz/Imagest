import { RECEIVE_SEARCH } from '../actions/search_actions';

import merge from 'lodash/merge';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SEARCH:
    
      return merge({}, {
        entities: action.results
      });
    default:
      return state;
  }
};

export default SearchReducer;
