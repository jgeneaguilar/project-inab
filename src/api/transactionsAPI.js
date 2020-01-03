import api from './baseAPI';

export const createTransaction = (budgetId, {date, amount, ...data}) => {
  const params = {
    date,
    payee: data.payee,
    payee_id: data.payeeId,
    account_id: data.accountId,
    category_id: data.categoryId,
    amount
  };

  return api
    .post(`/budgets/${budgetId}/transactions`, params)
    .then(res => res.data);

};

export const getTransactions = (budgetId, accountId) => {
  const params = {
    account_id: accountId
  };

  return api
    .get(`/budgets/${budgetId}/transactions`, params)
    .then(res => res.data);
}