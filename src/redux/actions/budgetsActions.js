import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';

export function createBudget(budget) {
  return { type: types.CREATE_BUDGET, budget};
}

export function loadBudgetsSuccess(budgets) {
  return { type: types.LOAD_BUDGETS_SUCCESS, budgets};
}

export function loadBudgets() {
  return function(dispatch) {
    return budgetApi.getBudgets()
      .then(budgets => {
        console.log('Load Budgets', budgets)
        dispatch(loadBudgetsSuccess(budgets));
      }).catch(error => {
        console.log(error);
      });
  }
}