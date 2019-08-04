import * as types from '../actions/actionTypes';

export default function budgetReducer(state = {}, action) {
  switch(action.type) {
    case types.CREATE_BUDGET:
      return [ ...state, { ...action.budget }];
    case types.LOAD_BUDGETS_SUCCESS:
      return { ...state, budgets: action.budgets}
    default:
      return state;
  }
}