import * as APIUtil from '../util/image_api_util';
import { receiveErrors, clearErrors } from './error_actions'

export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
});
export const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
});

export const requestImage = id => dispatch => (
  APIUtil.fetchImage(id).then(image => (
    dispatch(receiveImage(image))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const requestImages = () => dispatch => (
  APIUtil.fetchImages().then( images => (
    dispatch(receiveImages(images))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createImage = image => dispatch => (
  APIUtil.createImage(image)
  .then(image => dispatch(receiveImage(image)),
  err => dispatch(receiveErrors(err.responseJSON)))
);
