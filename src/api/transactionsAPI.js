import api from './baseAPI';

export const createUpdateTransaction = (budgetId, { date, amount, ...data }) => {
  const params = {
    date,
    payee: data.payee,
    payee_id: data.payeeId,
    account_id: data.accountId,
    category_id: data.categoryId,
    amount,
  };

  const req = data.id
    ? api.put(`/budgets/${budgetId}/transactions/${data.id}`, params)
    : api.post(`/budgets/${budgetId}/transactions`, params);

  return req.then((res) => res.data);
};

export const updateTransaction = (budgetId, { date, amount, ...data }) => {
  const params = {
    date,
    payee: data.payee,
    payee_id: data.payeeId,
    account_id: data.accountId,
    category_id: data.categoryId,
    amount,
  };

  return api
    .put(`/budgets/${budgetId}/transactions/${data.id}`, params)
    .then((res) => res.data);
};

export const getTransactions = (budgetId, accountId) => {
  const params = {
    account_id: accountId,
  };

  return api.get(`/budgets/${budgetId}/transactions`, params).then((res) => res.data);
};

export const deleteTransaction = (budgetId, transactionId) => {
  return api
    .delete(`/budgets/${budgetId}/transactions/${transactionId}`)
    .then((res) => res.data);
};
