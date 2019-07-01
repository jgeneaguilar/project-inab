import React from 'react';
import Nav from './Nav';
import {
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  login: {
    textDecoration: 'none',
    color: 'black',
  }
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav>
        <div className='appBarButtons'>
          <Button color='inherit'>
            <RouterLink to='/login' className={classes.login}>
              Login
            </RouterLink>
          </Button>
          <Button color='inherit'>
            <RouterLink to='/login' className={classes.login}>
              Another
            </RouterLink>
          </Button>
        </div>
      </Nav>
      <h1>Welcome to INAB</h1>
    </div>
  );
}

export default Home;
