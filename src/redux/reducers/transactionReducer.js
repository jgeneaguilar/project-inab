import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function transactionReducer(
  state = initialState.transactions,
  action
) {
  switch(action.type) {
    case types.ADD_TRANSACTION:
      return {...state, [action.transaction.id]: action.transaction};
    default:
      return state;
  }
}