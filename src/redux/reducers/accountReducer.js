import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function budgetReducer(
  state = initialState.budget.currentBudget.accounts,
  action
) {
  switch(action.type) {
    case types.ADD_ACCOUNT:
      return [ ...state, action.account ];
    default:
      return state;
  }
}