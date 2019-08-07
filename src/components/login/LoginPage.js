import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../redux/actions/userActions';

const LoginPage = ({ actions }) => {

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
    actions.userLogin(loginCredentials)
      .then(() => setLoading(false));
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


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      userLogin: bindActionCreators(userActions.userLogin, dispatch)
    }
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(LoginPage);
