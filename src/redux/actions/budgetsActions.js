import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';

export function loadBudgetsSuccess(budgets) {
  return { type: types.LOAD_BUDGETS_SUCCESS, budgets };
}

export function createBudgetSuccess(budget) {
  return { type: types.CREATE_BUDGET, budget};
}

export function createBudget(budget) {
  return function(dispatch) {
    return budgetApi.createBudget(budget)
      .then(data => {
        dispatch(createBudgetSuccess(data._id));
        dispatch(loadBudget(data._id));
      });
  };
}

export function loadBudget(budgetId) {
  return function(dispatch) {
    budgetApi.getBudget(budgetId)
      .then(budget => (
        dispatch(setCurrentBudget(budget))
      ));
  };
}

export function loadBudgets() {
  return function(dispatch) {
    return budgetApi.getAllBudgets()
      .then(allBudgets => {
        dispatch(loadBudgetsSuccess(allBudgets));

        // set default budget
        if (allBudgets.length > 0) {
          dispatch(loadBudget(allBudgets[0]['_id']));
        }
      }).catch(error => {
        console.log(error);
      });
  }
}

export function setCurrentBudget(currentBudget) {
  return { type: types.SET_CURRENT_BUDGET, currentBudget }
}