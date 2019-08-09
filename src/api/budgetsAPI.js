import api from './baseAPI';

export const createBudget = budgetName => {
  const param = {
    name: budgetName
  };

  return api.post('/budgets', param);
}

export const getBudgets = () => api.get('/budgets').then(res => res.data);


/** ACCOUNTS */

export const createAccount = (budgetId, { name, accountType, balance }) => {
  const param = {
    name: name,
    account_type: accountType,
    balance: balance
  };

  return api.post(`budgets/${budgetId}/accounts`, param).then(res => res.data);
}