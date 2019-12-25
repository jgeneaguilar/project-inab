import * as types from '../actions/actionTypes';

// Action Creators
export function addTransaction(transaction) {
  return { type: types.ADD_TRANSACTION, transaction };
}