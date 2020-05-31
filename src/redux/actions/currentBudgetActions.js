import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';
import { loadPayees } from './payeeActions';
import { loadTransactions } from './transactionActions';
import { loadToBeBudgeted } from './budgetCalculationActions';

// Action Creators
export function setCurrentBudget(currentBudget) {
  return { type: types.SET_CURRENT_BUDGET, currentBudget };
}

// Thunk
export function loadBudget(budgetId) {
  return function (dispatch) {
    budgetApi
      .getBudget(budgetId)
      .then((budget) => {
        dispatch(setCurrentBudget(budget));
        dispatch(loadPayees(budgetId));
        dispatch(loadTransactions(budgetId));
        dispatch(loadToBeBudgeted(budgetId));
      })
      .catch((error) => console.log(error));
  };
}
