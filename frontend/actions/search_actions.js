import * as APIUtil from '../util/search_api_util.js';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';


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
