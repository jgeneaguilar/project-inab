import api from './baseAPI';

export const getPayees = (budgetId) =>  {
  return api
    .get(`/budgets/${budgetId}/payees`)
    .then(res => res.data);
}