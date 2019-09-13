import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';


// Action Creators
export function setCurrentBudget(currentBudget) {
  return { type: types.SET_CURRENT_BUDGET, currentBudget };
}

export function setCurrentTimespan(currentTimespan) {
  return { type: types.SET_CURRENT_TIMESPAN, currentTimespan };
}


// HARDCODED TIMESPAN
const timespan = '092019';

// Thunk
export function loadBudget(budgetId) {
  return function(dispatch) {
    budgetApi.getBudget(budgetId)
      .then(budget => (
        dispatch(setCurrentBudget(budget))
      )).then(dispatch(setCurrentTimespan(timespan)));
  };
}
