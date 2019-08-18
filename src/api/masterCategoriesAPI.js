import api from './baseAPI';


export const createMasterCategory = (budgetId, masterCategoryName) => {
  const param = {
    name: masterCategoryName
  };

  return api.post(`budgets/${budgetId}/master_categories`, param)
    .then(res => res.data);
}