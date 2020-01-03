import * as types from '../actions/actionTypes';
import * as payeesAPI from '../../api/payeesAPI';

export function loadPayeesSuccess(data) {
  return { type: types.LOAD_PAYEES_SUCCESS, data };
}

export function loadPayees(budgetId) {
  return function(dispatch) {
    return payeesAPI.getPayees(budgetId)
    .then(data => {
      dispatch(loadPayeesSuccess(data))
    })
  }
}