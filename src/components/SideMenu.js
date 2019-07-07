import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Button,
} from '@material-ui/core';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Assignment from '@material-ui/icons/Assignment';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  toolbar: {
    visibility: 'hidden',
    minHeight: '48px'
  },
  paper: {
    width: '200px'
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  button: {
    margin: '8px'
  },
  addIcon: {
    marginRight: '5px'
  }
});

const SideMenu = ({ sideMenuOpen }) => {

  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      open={sideMenuOpen}
      className={classes.drawer}
      classes={{ paper: classes.paper }}
    >
      <Toolbar className={classes.toolbar}/>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary='Budget' />
        </ListItem>
        <ListItem button>
          <ListItemIcon >
            <AccountBalance />
          </ListItemIcon>
          <ListItemText primary='Accounts' />
        </ListItem>
      </List>
      <Divider />
      <Button
        variant='contained'
        color='default'
        size='small'
        className={classes.button}
      >
        <AddCircleOutline fontSize='small' className={classes.addIcon}/>
        Add Account
      </Button>
    </Drawer>
  );
}

SideMenu.propTypes = {
  sideMenuOpen: PropTypes.bool.isRequired
};

export default SideMenu;
