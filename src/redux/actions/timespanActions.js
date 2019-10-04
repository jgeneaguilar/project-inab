import * as types from './actionTypes';
import * as timespanAPI from '../../api/timespanAPI';

// Action Creators
function setCurrentTimespan(timespanElements) {
  return { type: types.SET_CURRENT_TIMESPAN, timespanElements };
}

// Thunk
export function loadTimespanElements(budgetId, timespan) {
  return function(dispatch) {
    timespanAPI.getTimespanElements(budgetId, timespan)
      .then(timespanElements => {
        dispatch(setCurrentTimespan(timespanElements));
      }).catch(error => console.log(error));
  }
}