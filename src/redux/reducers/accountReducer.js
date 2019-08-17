import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.accounts, action) {
  switch(action.type) {
    case types.SET_CURRENT_BUDGET:
      return action.currentBudget.accounts;
    case types.ADD_ACCOUNT_SUCCESS:
      return [ ...state, action.account ];
    default:
      return state;
  }
}