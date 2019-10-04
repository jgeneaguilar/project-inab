import * as types from './actionTypes';
import * as categoryBudgetsAPI from '../../api/categoryBudgetsAPI';

// Action Creators
function saveCategoryBudgetSuccess(categoryBudget) {
  return { type: types.SAVE_CATEGORY_BUDGET_SUCCESS, categoryBudget };
}

// Thunk
export function saveCategoryBudget(budgetId, timespan, categoryId, budgetedAmt) {
  return function(dispatch) {
    return categoryBudgetsAPI.createCategoryBudget(
      budgetId, timespan, categoryId, budgetedAmt
    ).then(categoryBudget => dispatch(saveCategoryBudgetSuccess(categoryBudget)))
    .catch(error => console.log(error));
  };
}