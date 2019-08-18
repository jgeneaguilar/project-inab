import api from './baseAPI';


export const createAccount = (budgetId, { name, accountType, balance }) => {
  const param = {
    name: name,
    account_type: accountType,
    balance: balance
  };

  return api.post(`budgets/${budgetId}/accounts`, param).then(res => res.data);
}