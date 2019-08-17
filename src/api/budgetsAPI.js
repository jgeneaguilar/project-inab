import api from './baseAPI';

export const createBudget = param => {
  return api.post('/budgets', param).then(res => res.data);
}

export const getAllBudgets = () => api.get('/budgets').then(res => res.data);

export const getBudget = budgetId => api.get(`/budgets/${budgetId}`)
  .then(res => res.data);

/** ACCOUNTS */

export const createAccount = (budgetId, { name, accountType, balance }) => {
  const param = {
    name: name,
    account_type: accountType,
    balance: balance
  };

  return api.post(`budgets/${budgetId}/accounts`, param).then(res => res.data);
}