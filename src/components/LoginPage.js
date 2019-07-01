import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import { login } from '../api/usersAPI';
import { setToken } from '../api/baseAPI';


const LoginPage = ({ setLogin }) => {

  // Input values
  const [loginCredentials, setloginCredentials] = useState({
    email: '',
    password: ''
  });
  // Toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Waiting for HTTP request
  const [loading, setLoading] = useState(false);

  // Login is successful
  // const [success, setSuccess] = useState(null);


  const handleChange = ({ target: { name, value }}) => {
    setloginCredentials({
      ...loginCredentials,
      [name]: value
    });
  }

  const onShowPassword = () => {
      setShowPassword(!showPassword);
    }

  const onLogin = e => {
    e.preventDefault();
    setLoading(true);
    login(loginCredentials)
      .then(res => setToken(res.data.token))
      .then(() => {
        setLoading(false)
        setLogin(true)
      });
  }

  return (
    <Login 
      loginCredentials={loginCredentials}
      handleChange={handleChange}
      onLogin={onLogin}
      showPassword={showPassword}
      onShowPassword={onShowPassword}
      loading={loading}
    />
  );
}


LoginPage.propTypes = {
  setLogin: PropTypes.func.isRequired
};

export default LoginPage;
