import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function budgetReducer(state = initialState.budgets, action) {
  switch (action.type) {
    case types.CREATE_BUDGET:
      return [...state, action.budget];
    case types.LOAD_BUDGETS_SUCCESS:
      return [...state, ...action.budgets];
    case types.DELETE_BUDGET_SUCCESS:
      return state.filter((budget) => budget._id !== action.budgetId);
    default:
      return state;
  }
}
