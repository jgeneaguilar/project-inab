import * as types from './actionTypes';
import * as timespanAPI from '../../api/timespanAPI';

// Action Creators
function setCurrentTimespan(timespanElements, timespan) {
  return { type: types.SET_CURRENT_TIMESPAN, timespanElements, timespan };
}

// Thunk
export function loadTimespanElements(budgetId, timespan) {
  return function (dispatch) {
    timespanAPI
      .getTimespanElements(budgetId, timespan)
      .then((timespanElements) => {
        dispatch(setCurrentTimespan(timespanElements, timespan));
      })
      .catch((error) => console.log(error));
  };
}
