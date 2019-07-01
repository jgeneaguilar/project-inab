import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  pageHeader: {
    backgroundColor: 'white',
    margin: 0
  },
  root: {
    width: '28px',
    height: '28px'
  }
});


const DashboardAppBar = ({ setAnchorEl, userDetails, defaultBudget }) => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.pageHeader}>
      <Toolbar variant='dense'>
        <Typography>
          <Button
            onClick={event => setAnchorEl(event.currentTarget)}
          >
            { defaultBudget.name || 'My Budget' }
          </Button>
        </Typography>
        <Avatar className={classes.root} src={userDetails.avatar} />
      </Toolbar>
    </AppBar>
  );
}

DashboardAppBar.propTypes = {
  setAnchorEl: PropTypes.func.isRequired,
  userDetails: PropTypes.object.isRequired
};

export default DashboardAppBar;
