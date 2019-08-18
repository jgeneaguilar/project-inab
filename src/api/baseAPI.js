import axios from 'axios';


const inabURL = 'https://inab-api.herokuapp.com/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const api = axios.create({
  baseURL: inabURL
});

export const setToken = authToken => {
  api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

export default api;