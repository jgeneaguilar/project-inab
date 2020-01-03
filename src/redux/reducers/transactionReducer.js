import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { groupByCategoryId } from '../../utils/stateNormalizer';
import { mapArrayToDictionaryId } from '../../utils/commonUtils';

export default function transactionReducer(
  state = initialState.transactions,
  action
) {
  switch(action.type) {
    case types.SET_CURRENT_TIMESPAN:
      const { transactions } = action.timespanElements;
      return groupByCategoryId(transactions);
    case types.CREATE_TRANSACTION_SUCCESS:
      return {...state, [action.transaction._id]: action.transaction};
    case types.LOAD_TRANSACTIONS_SUCCESS:
      return mapArrayToDictionaryId(action.data);
    default:
      return state;
  }
}