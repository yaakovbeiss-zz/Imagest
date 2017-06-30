import * as APIUtil from '../util/post_api_util';
import { receiveErrors, clearErrors } from './error_actions'

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});
export const receivePost = payload => {

  return {
    type: RECEIVE_POST,
    payload
  }
};

export const requestPost = id => dispatch => (
  APIUtil.fetchPost(id).then(post => (
    dispatch(receivePost(post))
  ))
);

export const requestPosts = () => dispatch => (
  APIUtil.fetchPosts().then(posts => (
    dispatch(receivePosts(posts))
  ))
);
export const createPost = post => dispatch => (
  APIUtil.createPost(post).then(post => (
    dispatch(receivePost(post))
  ))
);
