import api from './baseAPI';


export const createBudget = param => {
  return api.post('/budgets', param).then(res => res.data);
}

export const getAllBudgets = () => api.get('/budgets').then(res => res.data);

export const getBudget = budgetId => api.get(`/budgets/${budgetId}`)
  .then(res => res.data);
