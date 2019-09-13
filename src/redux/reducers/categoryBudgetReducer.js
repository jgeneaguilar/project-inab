import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function categoryBudgetReducer(
  state = initialState.categoryBudgets, 
  action
) {
  switch(action.type) {
    case types.ADD_CATEGORY_BUDGET_SUCCESS:
      return [ ...state, action.categoryBudget ];
    case types.LOAD_CATEGORY_BUDGETS_SUCCESS:
      return [ ...state, ...action.categoryBudgets ];
    default:
      return state;
  }
}