import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.accounts, action) {
  switch(action.type) {
    case types.SET_CURRENT_BUDGET:
      return action.currentBudget.accounts;
    case types.ADD_ACCOUNT_SUCCESS:
      return [ ...state, action.account ];
    case types.UPDATE_ACCOUNT_SUCCESS:
      return state.map(acct => 
          acct._id === action.account._id ? action.account : acct
        );
    case types.DELETE_ACCOUNT_SUCCESS:
      return state.filter(acct => acct._id !== action.accountId);
    default:
      return state;
  }
}