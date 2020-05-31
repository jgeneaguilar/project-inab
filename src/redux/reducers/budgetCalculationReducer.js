import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { mapArrayToDictionaryId, insertArrayToDictionaryId } from '../../utils/commonUtils';

export default function budgetCalculationsReducer(
  state = initialState.budgetCalculations,
  action
) {
  switch (action.type) {
    case types.LOAD_BUDGET_CALCULATIONS_SUCCESS:
      return mapArrayToDictionaryId(action.data, 'timespan');
    case types.UPDATE_BUDGET_CALCULATIONS_SUCCESS:
      return insertArrayToDictionaryId(state, action.data, 'timespan');
    
    default:
      return state;
  }
}
