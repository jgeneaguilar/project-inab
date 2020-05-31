import { combineReducers } from 'redux';
import user from './userReducer';
import budgets from './budgetReducer';
import currentBudget from './currentBudgetReducer';
import accounts from './accountReducer';
import masterCategories from './masterCategoryReducer';
import categories from './categoryReducer';
import budgetCalculations from './budgetCalculationReducer';
import currentTimespan from './timespanReducer';
import categoryBudgets from './categoryBudgetReducer';
import transactions from './transactionReducer';
import payees from './payeeReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({
  user,
  budgets,
  currentBudget,
  accounts,
  masterCategories,
  categories,
  currentTimespan,
  budgetCalculations,
  categoryBudgets,
  transactions,
  payees,
  modal,
});

export default rootReducer;
