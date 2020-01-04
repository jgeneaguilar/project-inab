import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { groupById, mapArrayToDictionaryId } from '../../utils/commonUtils';

export default function transactionReducer(
  state = initialState.transactions,
  action
) {
  switch(action.type) {
    case types.SET_CURRENT_TIMESPAN:
      const { transactions } = action.timespanElements;
      return groupById(transactions);
    case types.CREATE_TRANSACTION_SUCCESS:
    case types.DELETE_TRANSACTION_FAILURE:
      return {...state, [action.transaction._id]: action.transaction};
    case types.LOAD_TRANSACTIONS_SUCCESS:
      return mapArrayToDictionaryId(action.data);
    case types.DELETE_TRANSACTION_SUCCESS:
      const key = action.transaction._id;
      const {[key]: value, ...updatedState} = state;
      return updatedState;
    default:
      return state;
  }
}