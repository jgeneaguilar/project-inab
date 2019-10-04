import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { TIMESPAN } from '../../utils/timeUtils';

export default function currentTimespanReducer(
  state = initialState.currentTimespan,
  action
) {
  switch(action.type) {
    case types.SET_CURRENT_TIMESPAN:
      return TIMESPAN;
    default:
      return state;
  }
}
