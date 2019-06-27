import React from 'react';
import Nav from './Nav';
import {
  Paper,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
  CircularProgress
} from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  // CheckCircle
} from '@material-ui/icons';
// import { green } from '@material-ui/core/colors';
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
  },
  spinner: {
    marginLeft: '10px'
  },
  // successIcon: {
  //   color: green[500],
  //   marginLeft: '10px'
  // }
});

const Login = ({
  loginCredentials: { email, password }, handleChange, onLogin, onShowPassword, showPassword, loading
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
          <form className={classes.formFields} onSubmit={onLogin}>
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
              disabled={loading}
              size='small'
              fullWidth
              type='submit'
            >
              Log In
              {loading && <CircularProgress size={16} 
                className={classes.spinner} />}
            </Button>
          </form>
        </Paper>
      </div>
    </div> 
  );
}

export default Login;

