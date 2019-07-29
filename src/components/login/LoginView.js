import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Card, Form, Icon, Input, Button, Checkbox, Spin } from 'antd';
import './styles.scss';

const LoginView = ({ loginCredentials: { email, password }, handleChange,
  onLogin, loading }) => {

  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header>
        Hello
      </Header>
      <Content className='contentContainer'>
        <div>
          <Spin spinning={loading}>
            <Card title='Log in to continue' className='formContainer'>
              <Form onSubmit={onLogin} className='login-form'>
                <Input
                  prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='Email Address'
                  name='email'
                  onChange={handleChange}
                  value={email}
                />
                <Input.Password
                  prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder='Password'
                  name='password'
                  onChange={handleChange}
                  value={password}
                />
                <Checkbox>Remember me</Checkbox>
                <a className='login-form-forgot' href='/'>
                  Forgot password
                </a>
                <Button 
                  type='primary' 
                  htmlType='submit' 
                  className='login-form-button'
                >
                  Log in
                </Button>
                Or <a href='/'>register now!</a>
              </Form>
            </Card>
          </Spin>
        </div>
      </Content>
    </Layout>
  );
}

LoginView.propTypes = {
  loginCredentials: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default LoginView;
