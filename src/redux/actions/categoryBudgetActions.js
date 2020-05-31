import * as types from './actionTypes';
import * as categoryBudgetsAPI from '../../api/categoryBudgetsAPI';
import { updateBudgetCalculationsSuccess } from './budgetCalculationActions';

// Action Creators
function saveCategoryBudgetSuccess(categoryBudget) {
  return { type: types.SAVE_CATEGORY_BUDGET_SUCCESS, categoryBudget };
}

// Thunk
export function saveCategoryBudget(budgetId, timespan, categoryId, budgetedAmt) {
  return function (dispatch) {
    return categoryBudgetsAPI
      .createCategoryBudget(budgetId, timespan, categoryId, budgetedAmt)
      .then((data) => {
        if (!data) { return; }
        if (data.category_budget) {
          dispatch(saveCategoryBudgetSuccess(data.category_budget));
        }
        if (data.budget_calculations) {
          dispatch(updateBudgetCalculationsSuccess(data.budget_calculations));
        }
      })
      .catch((error) => console.log(error));
  };
}
