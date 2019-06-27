import api from './baseAPI';


export const login = ({ email, password }) => {
  const param = {
    email_address: email,
    password: password
  };

  return api
    .post('/users/login', param);
}

export const getUserDetails = () => {
  console.log(api.defaults.headers.common, "getUserDetails()")
  return  api.get('/users/me')
}