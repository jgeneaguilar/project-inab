import * as types from '../actions/actionTypes';
import * as usersApi from '../../api/usersAPI';
import { setToken } from '../../api/baseAPI';
// import { setLocalToken } from '../../utils';

export function userLoginSuccess(userData) {
  return { type: types.USER_LOGIN_SUCCESS, isLoggedIn: true };
}

// Uses Thunk
export function userLogin(loginCredentials) {
  return function(dispatch) {
    return usersApi.login(loginCredentials)
      .then(data => {
        setToken(data.token);
        dispatch(userLoginSuccess(data));
        // To speed up login process during Dev
        // setLocalToken(data.token); 
      });
  };
}


