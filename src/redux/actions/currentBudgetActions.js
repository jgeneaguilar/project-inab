import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';
import { loadTimespanElements } from './timespanActions';
import { TIMESPAN } from '../../utils/timeUtils';


// Action Creators
export function setCurrentBudget(currentBudget) {
  return { type: types.SET_CURRENT_BUDGET, currentBudget };
}


// Thunk
export function loadBudget(budgetId) {
  return function(dispatch) {
    budgetApi.getBudget(budgetId)
      .then(budget => {
        dispatch(setCurrentBudget(budget));

        if (Object.keys(budget).length > 0) {
          // uses hardcoded timespan for now
          dispatch(loadTimespanElements(budget._id, TIMESPAN))
        }
      }).catch(error => console.log(error));
  };
}
