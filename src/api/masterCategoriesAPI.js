import api from './baseAPI';


export const createMasterCategory = (budgetId, masterCategoryName) => {
  const param = {
    name: masterCategoryName
  };

  return api.post(`budgets/${budgetId}/master_categories`, param)
    .then(res => res.data);
}

export const saveMasterCategory = (
  budgetId, masterCategoryId, newMasterCategoryName
) => {
  const param = {
    name: newMasterCategoryName
  };

  return api
    .patch(`budgets/${budgetId}/master_categories/${masterCategoryId}`, param)
    .then(res => res.data);
}