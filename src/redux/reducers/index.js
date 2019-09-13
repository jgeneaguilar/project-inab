import { combineReducers } from 'redux';
import user from './userReducer';
import budgets from './budgetReducer';
import currentBudget from './currentBudgetReducer';
import accounts from './accountReducer';
import masterCategories from './masterCategoryReducer';
import categories from './categoryReducer';
import categoryBudgets from './categoryBudgetReducer';
import modal from './modalReducer';


const rootReducer = combineReducers({
  user,
  budgets,
  currentBudget,
  accounts,
  masterCategories,
  categories,
  categoryBudgets,
  modal
});

export default rootReducer;