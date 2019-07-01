import api from './baseAPI';

export const createBudget = budgetName => {
  const param = {
    name: budgetName
  };

  return api.post('/budgets', param)
}

export const getBudgets = () => api.get('/budgets')

