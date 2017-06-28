import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_ACCOUNT = 'RECEIVE_CURRENT_ACCOUNT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentaccount = currentaccount => ({
  type: RECEIVE_CURRENT_ACCOUNT,
  currentaccount
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = account => dispatch => (
  APIUtil.signup(account).then(account => (
    dispatch(receiveCurrentaccount(account))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = account => dispatch => (
  APIUtil.login(account).then(account => (
    dispatch(receiveCurrentaccount(account))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(account => (
    dispatch(receiveCurrentaccount(null))
  ))
);
