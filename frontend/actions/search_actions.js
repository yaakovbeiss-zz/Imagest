import * as APIUtil from '../util/search_api_util.js';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const HIDE_SEARCH_BAR = 'HIDE_SEARCH_BAR';
export const REVEAL_SEARCH_BAR = 'REVEAL_SEARCH_BAR';


export const hideSearchBar = (e) => {
  return {
    type: HIDE_SEARCH_BAR,
    e
  }
}

export const revealSearchBar = (e) => {
  return {
    type: REVEAL_SEARCH_BAR,
    e
  }
}

export const receiveSearch = results => {
  return {
    type: RECEIVE_SEARCH,
    results
  }
}

export const fetchSearch = search => dispatch => {
  return APIUtil.search(search)
  .then(results => dispatch(receiveSearch(results)));
};
