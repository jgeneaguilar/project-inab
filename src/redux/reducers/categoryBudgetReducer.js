import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { groupById } from '../../utils/commonUtils';



export default function categoryBudgetReducer(
  state = initialState.categoryBudgets, 
  action
) {
  switch(action.type) {
    case types.SET_CURRENT_BUDGET:
      return initialState.categoryBudgets;
    case types.SET_CURRENT_TIMESPAN:
      const { category_budgets } = action.timespanElements;
      return groupById(category_budgets);
    case types.SAVE_CATEGORY_BUDGET_SUCCESS:
      // adds and save
      const { category_id } = action.categoryBudget;
      return { ...state, [category_id]: action.categoryBudget };
    default:
      return state;
  }
}