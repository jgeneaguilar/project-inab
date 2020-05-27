import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { mapArrayToDictionaryId } from '../../utils/commonUtils';

export default function payeeReducer(state = initialState.payees, action) {
  switch (action.type) {
    case types.LOAD_PAYEES_SUCCESS:
      return mapArrayToDictionaryId(action.data);
    case types.CREATE_PAYEE_SUCCESS:
      return { ...state, [action.payee._id]: action.payee };
    default:
      return state;
  }
}
