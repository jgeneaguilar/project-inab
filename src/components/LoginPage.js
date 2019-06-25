import React from 'react';
import Nav from './Nav';
import {
  Paper,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff
} from '@material-ui/icons';
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

const LoginPage = ({
  loginCredentials: { email, password }, handleChange, onLogin, onShowPassword, showPassword
}) => {

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
              value={email}
              onChange={handleChange}
              variant='outlined'
              className={classes.fields}
              margin='dense'
            />
            <TextField 
              name='password'
              label='Password'
              value={password}
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              variant='outlined'
              className={classes.fields}
              margin='dense'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      size='small'
                      edge='end'
                      onClick={onShowPassword}
                    >
                      {showPassword ? <VisibilityOff fontSize='small'/> : <Visibility fontSize='small' />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
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

export default LoginPage;
