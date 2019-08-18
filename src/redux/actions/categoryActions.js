import * as types from './actionTypes';
import * as categoryApi from '../../api/categoriesAPI';


// Action Creators
export function addCategorySuccess(category) {
  return { type: types.ADD__CATEGORY_SUCCESS, category };
}

// Thunk
export function addCategory(budgetId, masterCategoryId, categoryName) {
  return function(dispatch) {
    return categoryApi.createCategory(budgetId, masterCategoryId, categoryName)
      .then(category => {
        dispatch(addCategorySuccess(category));
        console.log(category);
      }).catch(error => {
        console.log(error);
      });
  };
} 

