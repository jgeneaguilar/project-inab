import * as types from './actionTypes';
import * as categoryBudgetsAPI from '../../api/categoryBudgetsAPI';

// Action Creators
function addCategoryBudgetSuccess(categoryBudget) {
  return { type: types.ADD_CATEGORY_BUDGET_SUCCESS, categoryBudget };
}

function loadCategoryBudgetsSuccess(categoryBudgets) {
  return { type: types.LOAD_CATEGORY_BUDGETS_SUCCESS, categoryBudgets };
}


// Thunk
export function addCategoryBudget(budgetId, timespan, categoryId, budgetedAmt) {
  return function(dispatch) {
    return categoryBudgetsAPI.createCategoryBudget(
      budgetId, timespan, categoryId, budgetedAmt
    ).then(categoryBudget => dispatch(addCategoryBudgetSuccess(categoryBudget)))
    .catch(error => console.log(error));
  };
}

export function loadCategoryBudgets(budgetId, timespan) {
  return function(dispatch) {
    return categoryBudgetsAPI.getCategoryBudget(budgetId, timespan)
      .then(categoryBudgets => 
        dispatch(loadCategoryBudgetsSuccess(categoryBudgets))
      ).catch(error => console.log(error));
  };
}