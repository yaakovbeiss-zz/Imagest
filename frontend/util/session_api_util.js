import {
  receiveCurrentUser,
  receiveErrors
} from '../actions/session_actions';

export const login = account => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: account
  })
);

export const signup = account => (
  $.ajax({
    method: 'POST',
    url: '/api/account',
    data: account
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
