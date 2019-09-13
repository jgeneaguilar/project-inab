import api from './baseAPI';

// budgetedAmt is an integer number of cents in string format
export const createCategoryBudget = (
  budgetId, timespan, categoryId, budgetedAmt
) => {
  const param = {
    timespan,
    category_id: categoryId,
    budgeted: budgetedAmt
  };

  return api.post(`/budgets/${budgetId}/category_budgets`, param)
    .then(res => res.data);
}

export const getCategoryBudgets = (budgetId, timespan) => {
  const param = {
    timespan
  };

  return api.get(`/budgets/${budgetId}/category_budgets`, param)
    .then(res => res.data);
}



