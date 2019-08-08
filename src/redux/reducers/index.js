import { combineReducers } from 'redux';
import budget from './budgetReducer';
import user from './userReducer';
import modal from './modalReducer';


const rootReducer = combineReducers({
  budget,
  user,
  modal
});

export default rootReducer;