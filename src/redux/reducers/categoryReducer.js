import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function categoryReducer(
  state = initialState.categories, 
  action
) {
  switch(action.type) {
    case types.SET_CURRENT_BUDGET:
      return action.currentBudget.categories;
    case types.ADD_CATEGORY_SUCCESS:
      return [ ...state, action.category ];
    default:
      return state;
  }
}