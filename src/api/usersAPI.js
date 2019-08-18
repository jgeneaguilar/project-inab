import api from './baseAPI';


export const login = ({ email, password }) => {
  const param = {
    email_address: email,
    password: password
  };

  return api
    .post('/users/login', param)
    .then(res => res.data);
}

export const getUserData = () => api.get('/users/me');