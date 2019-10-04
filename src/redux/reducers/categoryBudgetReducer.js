import * as types from '../actions/actionTypes';
import initialState from './initialState';


function groupByCategoryId(objArr, prop) {
  return objArr.reduce((acc, obj) => {
    let key = obj[prop];
    if (!acc[key]) {
    	acc[key] = {};
    }
    acc[key] = obj;
    return acc;
  }, {});
}

export default function categoryBudgetReducer(
  state = initialState.categoryBudgets, 
  action
) {
  switch(action.type) {
    case types.SET_CURRENT_TIMESPAN:
      const { category_budgets } = action.timespanElements;
      return groupByCategoryId(category_budgets, 'category_id');
    case types.SAVE_CATEGORY_BUDGET_SUCCESS:
      // adds and save
      const { category_id } = action.categoryBudget;
      return { ...state, [category_id]: action.categoryBudget };
    default:
      return state;
  }
}