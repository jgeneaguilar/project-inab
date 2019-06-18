import React from 'react';
import Nav from './Nav';
import {
  Paper,
  TextField,
  Typography,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
    lineHeight: 2.5,
    fontSize: '1.5rem',
    fontWeight: 800,
    marginBottom: '20px'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    width: '400px',
    height: '350px'
  },
  formFields: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    padding: '15px',
  },
  fields: {
    marginBottom: '10px'
  },
  forgotPW: {
    textAlign: 'center',
    margin: '10px'
  },
  login: {
    marginTop: '15px'
  }
});

const Login = () => {
  const classes = useStyles();
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
              variant='outlined'
              className={classes.fields}
            />
            <TextField 
              name='password'
              label='Password'
              type='password'
              variant='outlined'
              className={classes.fields}
            />
            <Typography className={classes.forgotPW}>
              Forgot password?
            </Typography >
            <Button
              className={classes.login}
              color='default'
              variant='contained'
              size='large'
              fullWidth
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
