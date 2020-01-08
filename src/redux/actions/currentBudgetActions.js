import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';
import { loadPayees } from './payeeActions';
import { loadTransactions } from './transactionActions';


// Action Creators
export function setCurrentBudget(currentBudget) {
  return { type: types.SET_CURRENT_BUDGET, currentBudget };
}

// Thunk
export function loadBudget(budgetId) {
  return function(dispatch) {
    dispatch(loadPayees(budgetId));
    dispatch(loadTransactions(budgetId));
    budgetApi.getBudget(budgetId)
      .then(budget => dispatch(setCurrentBudget(budget)))
      .catch(error => console.log(error));
  };
}
