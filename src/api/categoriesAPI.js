import api from './baseAPI';

export const createCategory = (budgetId, masterCategoryId, categoryName) => {
  const param = {
    name: categoryName,
    master_category_id: masterCategoryId,
  };

  return api.post(`budgets/${budgetId}/categories`, param).then((res) => res.data);
};

export const updateCategory = (budgetId, categoryId, name) => {
  const param = { name };
  return api
    .patch(`budgets/${budgetId}/categories/${categoryId}`, param)
    .then((res) => res.data);
};

export const deleteCategory = (budgetId, categoryId) => {
  return api
    .delete(`budgets/${budgetId}/categories/${categoryId}`)
    .then((res) => res.data);
};
