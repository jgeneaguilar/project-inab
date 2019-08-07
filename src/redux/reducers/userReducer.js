import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        _id: action._id,
        isLoggedIn: true
      }
    default:
      return state;
  }
}