import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currentBudgetReducer(
  state = initialState.currentBudget,
  action
) {
  switch(action.type) {
    case types.SET_CURRENT_BUDGET:
      const { _id, name, } = action.currentBudget;
      return { _id, name }
    default:
      return state;
  }
}
