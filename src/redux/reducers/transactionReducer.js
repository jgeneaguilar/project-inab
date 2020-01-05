import { toTimespan } from "../../utils/timeUtils";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function transactionReducer(
  state = initialState.transactions,
  action
) {
  switch (action.type) {
    case types.SET_CURRENT_TIMESPAN:
      const { transactions } = action.timespanElements;
      return mapTransactions({...state}, transactions);
    case types.CREATE_TRANSACTION_SUCCESS:
    case types.DELETE_TRANSACTION_FAILURE:
      return {
        ...state,
        [action.transaction._id]: {
          ...action.transaction,
          timespan: toTimespan(action.transaction.date)
        }
      };
    case types.LOAD_TRANSACTIONS_SUCCESS:
      return mapTransactions(null, action.data);
    case types.DELETE_TRANSACTION_SUCCESS:
      const key = action.transaction._id;
      const { [key]: value, ...updatedState } = state;
      return updatedState;
    default:
      return state;
  }
}

export function mapTransactions(currentData, data) {
  const dataList = [...data].reduce((dataObj, item) => {
    dataObj[item._id] = { ...item, timespan: toTimespan(item.date) };
    return dataObj;
  }, currentData || {});

  return dataList;
}
