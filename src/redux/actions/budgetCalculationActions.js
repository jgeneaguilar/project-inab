import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';

export function loadBudgetCalculationsSuccess(data) {
  return { type: types.LOAD_BUDGET_CALCULATIONS_SUCCESS, data };
}
export function updateBudgetCalculationsSuccess(data) {
  return { type: types.UPDATE_BUDGET_CALCULATIONS_SUCCESS, data };
}
export function loadToBeBudgeted(budgetId) {
  return function (dispatch) {
    return budgetApi.getBudgetCalculations(budgetId).then((data) => {
      if (data && data.budget_calculations) {
        dispatch(loadBudgetCalculationsSuccess(data.budget_calculations));
      }
    });
  };
}