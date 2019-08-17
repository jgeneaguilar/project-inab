import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';


/** ACCOUNTS */

export function addAccountSuccess(account) {
  return { type: types.ADD_ACCOUNT_SUCCESS, account};
}

export function addAccount(budgetId, accountData) {
  return function(dispatch) {
    return budgetApi.createAccount(budgetId, accountData)
      .then(account => {
        console.log('Add Account', account);
        dispatch(addAccountSuccess(account));
      }).catch(error => {
        console.log(error);
      });
  }
} 

