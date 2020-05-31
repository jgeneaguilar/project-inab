import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';
import { loadBudget } from './currentBudgetActions';

// Action Creators
export function loadBudgetsSuccess(budgets) {
  return { type: types.LOAD_BUDGETS_SUCCESS, budgets };
}

export function createBudgetSuccess(budget) {
  return { type: types.CREATE_BUDGET, budget };
}

export function deleteBudgetSuccess(budgetId) {
  return { type: types.DELETE_BUDGET_SUCCESS, budgetId };
}


// Thunk
export function createBudget(budget) {
  return function (dispatch) {
    return budgetApi.createBudget(budget).then((data) => {
      dispatch(createBudgetSuccess(data));
      dispatch(loadBudget(data._id));
    });
  };
}

export function loadBudgets() {
  return function (dispatch) {
    return budgetApi
      .getAllBudgets()
      .then((allBudgets) => {
        dispatch(loadBudgetsSuccess(allBudgets));

        // set default budget
        if (allBudgets.length > 0) {
          dispatch(loadBudget(allBudgets[0]['_id']));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteBudget(budgetId) {
  return function (dispatch) {
    return budgetApi.deleteBudget(budgetId).then((data) => {
      dispatch(deleteBudgetSuccess(budgetId));
    });
  };
}

