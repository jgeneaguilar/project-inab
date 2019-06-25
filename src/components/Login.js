import React, { useState } from 'react';
import LoginPage from './LoginPage';
import { login } from '../api/usersAPI';
import { setToken } from '../api/baseAPI';


const Login = ({ setLogin }) => {

  const [loginCredentials, setloginCredentials] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false
  );

  const handleChange = ({ target: { name, value }}) => {
    setloginCredentials({
      ...loginCredentials,
      [name]: value
    });
  }

  const onShowPassword = () => {
      setShowPassword(!showPassword);
    }

  const onLogin = () => {
    login(loginCredentials)
      .then(res => setToken(res.data.token))
      .then(() => setLogin(true))
      .catch(err => console.log(err))
  }

  return (
    <LoginPage 
      loginCredentials={loginCredentials}
      handleChange={handleChange}
      onLogin={onLogin}
      showPassword={showPassword}
      onShowPassword={onShowPassword}
    />
  );
}

export default Login;
