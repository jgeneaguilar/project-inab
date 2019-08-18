import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';

// Action Creators
export function addAccountSuccess(account) {
  return { type: types.ADD_ACCOUNT_SUCCESS, account};
}

// Thunk
export function addAccount(budgetId, accountData) {
  return function(dispatch) {
    return budgetApi.createAccount(budgetId, accountData)
      .then(account => {
        dispatch(addAccountSuccess(account));
      }).catch(error => {
        console.log(error);
      });
  };
} 

