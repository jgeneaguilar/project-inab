import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { mapArrayToDictionaryId } from '../../utils/commonUtils';

export default function masterCategoryReducer(
  state = initialState.masterCategories,
  action,
) {
  switch (action.type) {
    case types.SET_CURRENT_BUDGET:
      return mapArrayToDictionaryId(action.currentBudget.master_categories);
    case types.ADD_MASTER_CATEGORY_SUCCESS:
    case types.UPDATE_MASTER_CATEGORY_SUCCESS:
      return { ...state, [action.masterCategory._id]: action.masterCategory };
    case types.DELETE_MASTER_CATEGORY_SUCCESS:
      const key = action.masterCategoryId;
      const { [key]: value, ...updatedState } = state;
      return updatedState;
    default:
      return state;
  }
}
