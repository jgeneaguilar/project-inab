import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { mapArrayToDictionaryId } from '../../utils/commonUtils';

export default function categoryReducer(
  state = initialState.categories, 
  action
) {
  switch(action.type) {
    case types.SET_CURRENT_BUDGET:
      return mapArrayToDictionaryId(action.currentBudget.categories);
    case types.ADD_CATEGORY_SUCCESS:
    case types.UPDATE_CATEGORY_SUCCESS:
      return {...state, [action.category._id]: action.category};
    case types.DELETE_CATEGORY_SUCCESS:
      const key = action.categoryId;
      const { [key]: value, ...updatedState } = state;
      return updatedState;
    default:
      return state;
  }
}