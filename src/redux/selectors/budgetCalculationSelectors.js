import { createSelector } from 'reselect';
import {
  getCurrentTimespan,
  getBudgetCalculations,
} from './commonSelectors';

export const getBudgetCalculation = createSelector(
  getCurrentTimespan,
  getBudgetCalculations,
  (currentTimespan, budgetCalculations) => {
    
    const { income = 0, totalIncome = 0, carryover = 0, budgeted = 0} = budgetCalculations[currentTimespan] || {}; 
    
    return {
      income,
      totalIncome,
      carryover,
      budgeted,
      toBeBudgeted: totalIncome - budgeted
    };
  }
);
