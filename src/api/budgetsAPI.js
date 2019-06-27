import api from './baseAPI';

export const createBudget = budgetName => {
  const param = {
    name: budgetName
  };

  return api.post('/budgets', param)
}

export const getDefaultBudget = () => api.get('/budgets')

