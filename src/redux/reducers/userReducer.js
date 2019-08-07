import * as types from '../actions/actionTypes';

export default function userReducer(state = {}, action) {
  switch(action.type) {
    case types.USER_LOGIN_SUCCESS:
      return { ...state, isLoggedIn: action.isLoggedIn }
    default:
      return state;
  }
}