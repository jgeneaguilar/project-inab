import axios from 'axios';
import { removeUserCredentials } from '../utils/storageUtils';


const inabURL = 'https://inab-api.herokuapp.com/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const api = axios.create({
  baseURL: inabURL
});

export const setToken = authToken => {
  api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

export default api;


// Add a 401 response interceptor
api.interceptors.response.use(null, function(error) { 
  if (error.response.status === 401) {
    console.log('Hey! You can\'t get in here!');
    removeUserCredentials();
    function redirectToLogin() {
      window.location = '/sessionExpired';
    }
    redirectToLogin();
  }
  return Promise.reject(error);
});