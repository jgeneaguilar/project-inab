import { createSelector } from 'reselect';
import { getCurrentTimespan, getAccounts, getCategoryBudgetList } from './commonSelectors';

export const getTotalBudget = createSelector(
  getCurrentTimespan,
  getAccounts,
  getCategoryBudgetList,
  (currentTimespan, accounts, categoryBudgets) => {

    const currentBudgets = categoryBudgets.filter(item => item.timespan === currentTimespan);
    const totalBudget = currentBudgets.reduce((total, item) => total = total + item.budgeted, 0);
    const totalBalance = accounts.reduce((total, item) => total = total + item.balance, 0);

    return (totalBalance - totalBudget) / 100;
  }
)