import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function budgetReducer(state = initialState.budget, action) {
  switch(action.type) {
    case types.CREATE_BUDGET:
      return [ ...state, { ...action.budget }]; // TODO: need to update
    case types.LOAD_BUDGETS_SUCCESS:
      return { ...state, budgets: action.budgets }
    case types.SET_CURRENT_BUDGET:
      return { ...state, currentBudget: action.currentBudget }
    default:
      return state;
  }
}