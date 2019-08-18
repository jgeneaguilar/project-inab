import * as types from '../actions/actionTypes';
import * as usersApi from '../../api/usersAPI';
import { setToken } from '../../api/baseAPI';
import { 
  setUserCredentials, 
  getUserCredentials 
} from '../../utils/storageUtils';


// Action Creators
export function userLoginSuccess(userData) {
  return { type: types.USER_LOGIN_SUCCESS, _id: userData._id };
}

// Thunk
export function userLogin(loginCredentials) {
  return function(dispatch) {
    return usersApi.login(loginCredentials)
      .then(data => {
        setToken(data.token);
        dispatch(userLoginSuccess(data));
        setUserCredentials(data._id, data.token); 
      });
  };
}

export function checkUserLogin() {
  return function(dispatch) {
    const data = getUserCredentials();
    if (data._id && data.token) {
      setToken(data.token)
      dispatch(userLoginSuccess(data));
    }
  };
} 


