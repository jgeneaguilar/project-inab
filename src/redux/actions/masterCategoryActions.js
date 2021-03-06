import * as types from './actionTypes';
import * as masterCategoryApi from '../../api/masterCategoriesAPI';

// Action Creators
export function addMasterCategorySuccess(masterCategory) {
  return { type: types.ADD_MASTER_CATEGORY_SUCCESS, masterCategory };
}

export function updateMasterCategorySuccess(masterCategory) {
  return { type: types.UPDATE_MASTER_CATEGORY_SUCCESS, masterCategory };
}

export function deleteMasterCategorySuccess(masterCategoryId) {
  return { type: types.DELETE_MASTER_CATEGORY_SUCCESS, masterCategoryId };
}

// Thunk
export function addMasterCategory(budgetId, masterCategoryName) {
  return function (dispatch) {
    return masterCategoryApi
      .createMasterCategory(budgetId, masterCategoryName)
      .then((masterCategory) => {
        dispatch(addMasterCategorySuccess(masterCategory));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updateMasterCategory(budgetId, masterCategoryId, masterCategoryName) {
  return function (dispatch) {
    return masterCategoryApi
      .saveMasterCategory(budgetId, masterCategoryId, masterCategoryName)
      .then((masterCategory) => {
        dispatch(updateMasterCategorySuccess(masterCategory));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteMasterCategory(budgetId, masterCategoryId) {
  return function (dispatch) {
    return masterCategoryApi
      .deleteMasterCategory(budgetId, masterCategoryId)
      .then((data) => {
        dispatch(deleteMasterCategorySuccess(masterCategoryId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
