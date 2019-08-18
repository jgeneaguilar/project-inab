import * as types from './actionTypes';
import * as accountApi from '../../api/accountsAPI';

// Action Creators
export function addAccountSuccess(account) {
  return { type: types.ADD_ACCOUNT_SUCCESS, account};
}

// Thunk
export function addAccount(budgetId, accountData) {
  return function(dispatch) {
    return accountApi.createAccount(budgetId, accountData)
      .then(account => {
        dispatch(addAccountSuccess(account));
      }).catch(error => {
        console.log(error);
      });
  };
} 

