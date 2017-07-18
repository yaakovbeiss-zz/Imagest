import * as APIUtil from '../util/account_api_util';

export const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT';
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS';

export const receiveAccounts = accounts => ({
  type: RECEIVE_ACCOUNTS,
  accounts
});

export const receiveAccount = account => {
  return {
    type: RECEIVE_ACCOUNT,
    account
  }
};

export const requestAccount = id => dispatch => (
  APIUtil.fetchAccount(id).then(account => (
    dispatch(receiveAccount(account))
  ))
);

export const requestAccounts = () => dispatch => (
  APIUtil.fetchAccounts().then(accounts => (
    dispatch(receiveAccounts(accounts))
  ))
);
