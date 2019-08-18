import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/userActions';


const LoginPage = ({ userLogin }) => {

  // Input values
  const [loginCredentials, setloginCredentials] = useState({
    email: '',
    password: ''
  });

  // Waiting for HTTP request
  const [loading, setLoading] = useState(false);

  function handleChange({ target: { name, value }}) {
    setloginCredentials({
      ...loginCredentials,
      [name]: value
    });
  }

  function onLogin(event) {
    event.preventDefault();
    setLoading(true);
    userLogin(loginCredentials);
  }

  return (
    <LoginView
      loginCredentials={loginCredentials}
      handleChange={handleChange}
      onLogin={onLogin}
      loading={loading}
    />
  );
}


LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired
};


export default connect(null, { userLogin })(LoginPage);
