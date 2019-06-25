import api from './baseAPI';

export const newBudget = ({ budgetName }) => {
  const param = {
    name: budgetName
  };

  return api.post('/budgets', param)
}