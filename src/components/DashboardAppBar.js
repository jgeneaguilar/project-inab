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
  avatarContainer: {
    marginLeft: '10px'
  },
  avatarRoot: {
    width: '28px',
    height: '28px'
  },
  budgetMenuButton: {
    width: '160px'
  },
  divider: {
    float: 'left',
    borderLeft: '1px solid lightgrey',
    height: '28px',
    margin: '4px 4px 0 0'
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
          className={classes.budgetMenuButton}
        >
          { defaultBudget.name || 'My Budget' }
        </Button>
        <span className={classes.divider}/>
        <div className={classes.avatarContainer}>
          <Avatar 
            src={userDetails.avatar}
            classes={{ root: classes.avatarRoot }}
            />
        </div>
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
