import merge from 'lodash/merge';

import {
  RECEIVE_IMAGE,
  RECEIVE_IMAGES
} from '../actions/image_actions';

const defaultState = Object.freeze({
  entities: {},
  currentImage: null
});

const ImageReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_IMAGES:
      return merge({}, state, {
        entities: action.images
      });
    case RECEIVE_IMAGE:
      const image = action.image;
      debugger
      return merge({}, state, {
        entities: { [image.id]: image },
        currentImage: image.id
      });
    default:
      return state;
  }
};

export default ImageReducer;
