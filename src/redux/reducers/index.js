import { combineReducers } from 'redux';
import budgets from './budgetReducer';
import user from './userReducer';


const rootReducer = combineReducers({
  budgets,
  user
});

export default rootReducer;