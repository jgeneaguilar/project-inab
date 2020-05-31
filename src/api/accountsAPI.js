import api from './baseAPI';

export const createAccount = (budgetId, { name, accountType, balance, date }) => {
  const param = {
    name: name,
    account_type: accountType,
    balance,
    date,
  };

  return api.post(`budgets/${budgetId}/accounts`, param).then((res) => res.data);
};

export const saveAccount = (budgetId, accountData) => {
  const { _id: accountId } = accountData;
  const params = {
    name: accountData.name,
    balance: accountData.balance,
  };

  return api
    .patch(`budgets/${budgetId}/accounts/${accountId}`, params)
    .then((res) => res.data);
};

export const deleteAccount = (budgetId, accountId) => {
  return api.delete(`budgets/${budgetId}/accounts/${accountId}`).then((res) => res.data);
};
