import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';

export function createBudget(budget) {
  return { type: types.CREATE_BUDGET, budget};
}

export function loadBudgetsSuccess(budgets) {
  return { type: types.LOAD_BUDGETS_SUCCESS, budgets };
}

export function loadBudgets() {
  return function(dispatch) {
    return budgetApi.getAllBudgets()
      .then(allBudgets => {
        // console.log('Load Budgets', );
        dispatch(loadBudgetsSuccess(allBudgets));
        // set default budget
        budgetApi.getBudget(allBudgets[0]['_id'])
          .then(budget => (
            dispatch(setCurrentBudget(budget))
          ));
      }).catch(error => {
        console.log(error);
      });
  }
}

export function setCurrentBudget(currentBudget) {
  return { type: types.SET_CURRENT_BUDGET, currentBudget }
}