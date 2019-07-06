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
} from '@material-ui/core';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Assignment from '@material-ui/icons/Assignment';
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
    </Drawer>
  );
}

SideMenu.propTypes = {
  sideMenuOpen: PropTypes.bool.isRequired
};

export default SideMenu;
