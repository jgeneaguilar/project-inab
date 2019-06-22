import React, { useState } from 'react';
import Nav from './Nav';
import {
  Paper,
  TextField,
  Typography,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { login } from '../api/usersAPI';
import { setToken } from '../api/baseAPI';


const useStyles = makeStyles({
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto'
  },
  container: {
    display: 'flex',
    flex: '1 0 auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    lineHeight: 1.7,
    fontSize: '1rem',
    fontWeight: 800
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '17px 10px 10px 10px',
    width: '300px',
    height: '250px'
  },
  formFields: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    padding: '15px',
  },
  fields: {
    
  },
  forgotPW: {
    textAlign: 'center',
    margin: '10px',
    fontSize: '0.8rem'
  },
  login: {
    marginTop: '15px'
  }
});

const Login = props => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const classes = useStyles();

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const onLogin = () => {
    login(values)
      .then(res => setToken(res.data.token))
      .then(() => props.setLogin(true))
      .catch(err => console.log(err))

  }

  return (
    <div className={classes.pageWrapper}>
      <Nav />
      <div className={classes.container}>
        <Paper className={classes.formContainer}>
          <Typography className={classes.title}>
            Log in to continue
          </Typography>
          <form className={classes.formFields}>
            <TextField 
              name='email'
              label='Email'
              value= {values.email}
              onChange={handleChange}
              variant='outlined'
              className={classes.fields}
              margin='dense'
            />
            <TextField 
              name='password'
              label='Password'
              value= {values.password}
              onChange={handleChange}
              type='password'
              variant='outlined'
              className={classes.fields}
              margin='dense'
            />
            <Typography className={classes.forgotPW}>
              Forgot password?
            </Typography >
            <Button
              className={classes.login}
              color='default'
              variant='contained'
              size='small'
              fullWidth
              onClick={onLogin}
            >
              Log In
            </Button>
          </form>
        </Paper>
      </div>
    </div> 
  );
}

export default Login;
