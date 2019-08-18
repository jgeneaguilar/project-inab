import api from './baseAPI';


export const createCategory = (budgetId, masterCategoryId, categoryName) => {
  const param = {
    name: categoryName,
    master_category_id: masterCategoryId
  };

  return api.post(`budgets/${budgetId}/categories`, param)
    .then(res => res.data);
}