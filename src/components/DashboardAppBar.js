import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Button,
  Avatar,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageHeader: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'white',
    margin: 0,
    boxShadow: 'none',
    borderBottom: '0.5px solid lightgrey'
  },
  root: {
    width: '28px',
    height: '28px'
  }
}));


const DashboardAppBar = ({ handleToggleSideMenu, setAnchorEl, userDetails, defaultBudget }) => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.pageHeader}>
      <Toolbar variant='dense'>
        <IconButton
          size='small'
          edge='start'
          onClick={handleToggleSideMenu}
        >
          <MenuIcon fontSize='small' />
        </IconButton>
        <Button
          onClick={event => setAnchorEl(event.currentTarget)}
        >
          { defaultBudget.name || 'My Budget' }
        </Button>
        <Avatar className={classes.root} src={userDetails.avatar} />
      </Toolbar>
    </AppBar>
  );
}

DashboardAppBar.propTypes = {
  handleToggleSideMenu: PropTypes.func.isRequired,
  setAnchorEl: PropTypes.func.isRequired,
  userDetails: PropTypes.object.isRequired,
  defaultBudget: PropTypes.object.isRequired,
};

export default DashboardAppBar;
