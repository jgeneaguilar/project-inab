import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    
  },
  pageHeader: {
    backgroundColor: 'white',
    margin: 0
  },
  title: {
    flexGrow: 1,
    fontWeight: 800,
  },
  branding: {
    textDecoration: 'none',
    color: 'black',
  }
});

const Nav = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.pageHeader}>
        <Toolbar>
          <Typography variant='h5' className={classes.title}>
            <RouterLink to='/' className={classes.branding}>INAB.</RouterLink>
          </Typography>
          <div>{children}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  children: PropTypes.element
};

export default Nav;