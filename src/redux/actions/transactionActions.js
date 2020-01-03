import * as types from "../actions/actionTypes";
import * as transactionsApi from "../../api/transactionsAPI";

// Action Creators

export function loadTransactionsSuccess(data) {
  return { type: types.LOAD_TRANSACTIONS_SUCCESS, data };
}

export function createTransactionSuccess(transaction) {
  return { type: types.CREATE_TRANSACTION_SUCCESS, transaction };
}

export function createPayeeSuccess(payee) {
  return { type: types.CREATE_PAYEE_SUCCESS, payee };
}

export function loadTransactions(budgetId, accountId) {
  return function(dispatch) {
    return transactionsApi.getTransactions(budgetId, accountId).then(data => {
      dispatch(loadTransactionsSuccess(data));
    });
  };
}

export function createTransaction(budgetId, transaction) {
  return function(dispatch) {
    return transactionsApi
      .createTransaction(budgetId, transaction)
      .then(data => {
        if (!transaction.payee_id) {
          dispatch(createPayeeSuccess({_id: data.payee_id, name: transaction.payee, budget_id: budgetId}));
        }
        dispatch(createTransactionSuccess(data));
      });
  };
}
