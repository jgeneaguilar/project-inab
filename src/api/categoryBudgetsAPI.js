import api from './baseAPI';

// budgetedAmt is an integer number of cents in string format
export const createCategoryBudget = (
  budgetId, timespan, categoryId, budgetedAmt
) => {
  const params = {
    timespan,
    category_id: categoryId,
    budgeted: budgetedAmt
  };

  return api.post(`/budgets/${budgetId}/category_budgets`, params)
    .then(res => res.data);
}

export const getCategoryBudgets = (budgetId, timespan) => {
  const params = {
    timespan
  };

  return api.get(`/budgets/${budgetId}/category_budgets`, { params })
    .then(res => res.data);
}



