import api from './baseAPI';

export const getTimespanElements = (budgetId, timespan) => {
  const params = {
    timespan
  };

  return api.get(`/budgets/${budgetId}/timespan`, { params })
    .then(res => res.data);
}