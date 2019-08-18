import * as types from './actionTypes';
import * as budgetApi from '../../api/budgetsAPI';


// Action Creators
export function addMasterCategorySuccess(masterCategory) {
  return { type: types.ADD_MASTER_CATEGORY_SUCCESS, masterCategory };
}

// Thunk
export function addMasterCategory(budgetId, masterCategoryName) {
  return function(dispatch) {
    return budgetApi.createMasterCategory(budgetId, masterCategoryName)
      .then(masterCategory => {
        dispatch(addMasterCategorySuccess(masterCategory));
      }).catch(error => {
        console.log(error);
      });
  };
} 

