import { createSelector } from 'reselect';
import { getCategoryBudgetList, getCurrentTimespan, getTransactionsList } from './commonSelectors';
export const getTotalBudget = createSelector(
  getCurrentTimespan,
  getCategoryBudgetList,
  getTransactionsList,
  (currentTimespan, categoryBudgets, transactions) => {

    const inflow_transactions = transactions.filter(item => item.amount > 0);

    const currentBudgets = categoryBudgets
      .filter(item => item.timespan === currentTimespan)
    const totalBudget = currentBudgets.reduce((total, item) => total = total + item.budgeted, 0);
    const totalBalance = inflow_transactions.reduce((total, item) => total = total + item.amount, 0);
    
    return totalBalance - totalBudget;
  }
)