import { RECEIVE_SEARCH, HIDE_SEARCH_BAR, REVEAL_SEARCH_BAR } from '../actions/search_actions';
import merge from 'lodash/merge';

const defaultState = {
  entities: {},
  hideSearchBar: true
}

const SearchReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SEARCH:
      return merge({}, state, {
        entities: action.results
      });
      break;

    case HIDE_SEARCH_BAR:
      return merge({}, state, {
        hideSearchBar: true
      })
      break;
    case REVEAL_SEARCH_BAR:
      return merge({}, state, {
        hideSearchBar: false
      })
      break;
    default:
      return state;
  }
};

export default SearchReducer;
