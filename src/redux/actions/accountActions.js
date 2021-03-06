import * as types from './actionTypes';
import * as accountApi from '../../api/accountsAPI';
import { createTransactionSuccess } from './transactionActions';
import { loadToBeBudgeted } from './budgetCalculationActions';

// Action Creators
export function addAccountSuccess(account) {
  return { type: types.ADD_ACCOUNT_SUCCESS, account };
}

export function updateAccountSuccess(account) {
  return { type: types.UPDATE_ACCOUNT_SUCCESS, account };
}

export function deleteAccountSuccess(accountId) {
  return { type: types.DELETE_ACCOUNT_SUCCESS, accountId };
}

// Thunk
export function addAccount(budgetId, accountData) {
  return function (dispatch) {
    return accountApi
      .createAccount(budgetId, accountData)
      .then((data) => {
        const { account, transaction } = data;
        dispatch(addAccountSuccess(account));
        dispatch(createTransactionSuccess(transaction));
        dispatch(loadToBeBudgeted(budgetId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updateAccount(budgetId, accountData) {
  return function (dispatch) {
    return accountApi
      .saveAccount(budgetId, accountData)
      .then((data) => {
        const { account, transaction } = data;
        dispatch(updateAccountSuccess(account));
        dispatch(createTransactionSuccess(transaction));
        dispatch(loadToBeBudgeted(budgetId));
      })
      .catch((error) => console.log(error));
  };
}

export function deleteAccount(budgetId, accountId) {
  return function (dispatch) {
    return accountApi
      .deleteAccount(budgetId, accountId)
      .then(() => dispatch(deleteAccountSuccess(accountId)))
      .catch((error) => console.log(error));
  };
}
