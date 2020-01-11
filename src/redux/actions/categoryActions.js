import * as types from './actionTypes';
import * as categoryApi from '../../api/categoriesAPI';


// Action Creators
export function addCategorySuccess(category) {
  return { type: types.ADD_CATEGORY_SUCCESS, category };
}

export function updateCategorySuccess(category) {
  return { type: types.UPDATE_CATEGORY_SUCCESS, category };
}

export function deleteCategorySuccess(categoryId) {
  return { type: types.DELETE_CATEGORY_SUCCESS, categoryId };
}

// Thunk
export function addCategory(budgetId, masterCategoryId, categoryName) {
  return function(dispatch) {
    return categoryApi.createCategory(budgetId, masterCategoryId, categoryName)
      .then(category => {
        dispatch(addCategorySuccess(category));
      }).catch(error => {
        console.log(error);
      });
  };
} 

export function updateCategory(budgetId, categoryId, categoryName) {
  return function(dispatch) {
    return categoryApi.updateCategory(
      budgetId, categoryId, categoryName
    ).then(data => {
      dispatch(updateCategorySuccess(data));
    }).catch(error => {
      console.log(error);
    });
  };
}

export function deleteCategory(budgetId, categoryId) {
  return function(dispatch) {
    return categoryApi
      .deleteCategory(budgetId, categoryId)
      .then(data => {
        dispatch(deleteCategorySuccess(categoryId));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
