import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { groupByCategoryId } from '../../utils/stateNormalizer';


export default function transactionReducer(
  state = initialState.transactions,
  action
) {
  switch(action.type) {
    case types.SET_CURRENT_TIMESPAN:
      const { transactions } = action.timespanElements;
      return groupByCategoryId(transactions);
    case types.ADD_TRANSACTION:
      return {...state, [action.transaction.id]: action.transaction};
    default:
      return state;
  }
}