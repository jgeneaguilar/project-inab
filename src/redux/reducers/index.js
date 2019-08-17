import { combineReducers } from 'redux';
import user from './userReducer';
import budgets from './budgetReducer';
import currentBudget from './currentBudgetReducer';
import accounts from './accountReducer';
import masterCategories from './masterCategoryReducer';
import modal from './modalReducer';


const rootReducer = combineReducers({
  user,
  budgets,
  currentBudget,
  accounts,
  masterCategories,
  modal
});

export default rootReducer;