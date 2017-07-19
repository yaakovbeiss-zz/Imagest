import merge from 'lodash/merge';
import { RECEIVE_ACCOUNTS, RECEIVE_ACCOUNT } from '../actions/account_actions';


const defaultState = {
  entities: {},
  account: null
  };

const AccountReducer = ( state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ACCOUNTS:
        return merge({}, state, {
          entities: action.accounts
        });
    case RECEIVE_ACCOUNT:
      const account = action.account;
      return merge({}, state, {
        entities: { [account.id]: account },
        account: account.id
      });
    default:
      return state
  }
}

export default AccountReducer;
