import { TOGGLE_MODAL, toogleModal } from '../actions/modal_actions';

const defaultState = true;

const ModalReducer = ( state = defaultState, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_MODAL:
      return state ? false : true;
    default:
      return state;
  }

}
export default ModalReducer;
