import * as APIUtil from '../util/post_api_util';
import { receiveErrors, clearErrors } from './error_actions'

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});
export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

// export const receiveErrors = errors => ({
//   type: RECEIVE_ERRORS,
//   errors
// });

export const requestPost = id => dispatch => (
  APIUtil.fetchPost(id).then(post => (
    dispatch(receivePost(post))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const requestPosts = () => dispatch => (
  APIUtil.fetchPosts().then(posts => (
    dispatch(receivePosts(posts))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createPost = post => dispatch => (
  APIUtil.createPost(post)
  .then(post => { dispatch(receivePost(post)); dispatch(clearErrors())},
  err => dispatch(receiveErrors(err.responseJSON)))
);
