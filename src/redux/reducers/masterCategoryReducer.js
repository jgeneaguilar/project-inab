import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function masterCategoryReducer(
  state = initialState.masterCategories, 
  action
) {
  switch(action.type) {
    case types.SET_CURRENT_BUDGET:
      return action.currentBudget.master_categories;
    case types.ADD_MASTER_CATEGORY_SUCCESS:
      return [ ...state, action.masterCategory ];
    default:
      return state;
  }
}