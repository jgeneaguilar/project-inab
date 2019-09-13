import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';
import { loadCategoryBudgets } from './categoryBudgetActions';


// Action Creators
export function setCurrentBudget(currentBudget) {
  return { type: types.SET_CURRENT_BUDGET, currentBudget };
}

// TIMESPAN is HARDCODED for now
const TIMESPAN = '092019';

// Thunk
export function loadBudget(budgetId) {
  return function(dispatch) {
    budgetApi.getBudget(budgetId)
      .then(budget => {
        dispatch(setCurrentBudget(budget));

        if (Object.keys(budget).length > 0) {
          dispatch(loadCategoryBudgets(budget._id, TIMESPAN))
        }
      });
  };
}
