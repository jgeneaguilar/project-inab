import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currentTimespanReducer(
  state = initialState.currentTimespan,
  action
) {
  switch (action.type) {
    case types.SET_CURRENT_TIMESPAN:
      return action.timespan;
    default:
      return state;
  }
}
