import * as types from '../actions/actionTypes';
import * as transactionsApi from '../../api/transactionsAPI';

// Action Creators

export function loadTransactionsSuccess(data) {
  return { type: types.LOAD_TRANSACTIONS_SUCCESS, data };
}

export function createTransactionSuccess(transaction) {
  return { type: types.CREATE_TRANSACTION_SUCCESS, transaction };
}

export function updateTransactionSuccess(transaction, amountDiff) {
  return { type: types.UPDATE_TRANSACTION_SUCCESS, transaction, amountDiff };
}

export function deleteTransactionSuccess(transaction) {
  return { type: types.DELETE_TRANSACTION_SUCCESS, transaction };
}

export function deleteTransactionFailure(transaction) {
  return { type: types.DELETE_TRANSACTION_FAILURE, transaction };
}

export function createPayeeSuccess(payeeId, name, budgetId) {
  return {
    type: types.CREATE_PAYEE_SUCCESS,
    payee: { _id: payeeId, name, budget_id: budgetId },
  };
}

export function loadTransactions(budgetId, accountId) {
  return function (dispatch) {
    return transactionsApi.getTransactions(budgetId, accountId).then((data) => {
      dispatch(loadTransactionsSuccess(data));
    });
  };
}

export function createTransaction(budgetId, transaction) {
  return function (dispatch) {
    return transactionsApi.createUpdateTransaction(budgetId, transaction).then((data) => {
      if (!transaction.payee_id) {
        dispatch(createPayeeSuccess(data.payee_id, transaction.payee, budgetId));
      }
      dispatch(createTransactionSuccess(data));
    });
  };
}

export function updateTransaction(budgetId, transaction) {
  return function (dispatch, getState) {
    const oldTransaction = getState().transactions[transaction.id];
    if (!oldTransaction) {
      return;
    }

    return transactionsApi.updateTransaction(budgetId, transaction).then((data) => {
      if (!transaction.payee_id) {
        dispatch(createPayeeSuccess(data.payee_id, transaction.payee, budgetId));
      }

      const amountDiff = oldTransaction.amount - transaction.amount;
      dispatch(updateTransactionSuccess(data, amountDiff));
    });
  };
}

export function removeTransaction(budgetId, transaction) {
  return function (dispatch) {
    dispatch(deleteTransactionSuccess(transaction));
    return transactionsApi
      .deleteTransaction(budgetId, transaction._id)
      .then()
      .catch((_) => {
        dispatch(deleteTransactionFailure(transaction));
      });
  };
}
