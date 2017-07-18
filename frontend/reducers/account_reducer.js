import merge from 'lodash/merge';
import { RECEIVE_ACCOUNTS, RECEIVE_ACCOUNT } from '../actions/account_actions';


const defaultState = Object.freeze({
  entities : {},
  currentAccount: null,
  });

const AccountReducer = ( state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ACCOUNTS:
        return Object.assign({}, state, {
          entities: action.accounts
        })
      break;
    case RECEIVE_ACCOUNT:
      const account = action.account;
      return merge({}, state, {
        entities: { [account.id]: account },
        account: account.id
      });
    break;
    default:
      return state
  }
}

export default AccountReducer;
