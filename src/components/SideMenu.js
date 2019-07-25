import React, { useState } from 'react';
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
  Collapse
} from '@material-ui/core';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Assignment from '@material-ui/icons/Assignment';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Edit from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  toolbar: {
    visibility: 'hidden',
    minHeight: '48px'
  },
  paper: {
    width: '240px'
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
  },
  primaryText: {
    float: 'left'
  },
  secondaryText: {
    float: 'right',
    textAlign: 'right'
  }
});

const SideMenu = ({ sideMenuOpen }) => {

  const classes = useStyles();

  const [listOpen, setListOpen] = useState({
    budgetList: null,
    trackingList: null
  });

  // const handleClick = list => {
  //   setListOpen({
  //     ...listOpen,
  //     [list]: true,
  //   })
  // }

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
      {/* Budget Accounts List */}
      <List>
        <ListItem button dense>
          {listOpen ? <ExpandLess /> : <ExpandMore />}
          <ListItemText 
            primary='BUDGET' 
            secondary='P 89,987'
            classes={{ primary: classes.primaryText, secondary: classes.secondaryText }}  
          />
        </ListItem>
        <Collapse in={listOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button dense>
              <ListItemIcon>
                <Edit fontSize='small'/>   
              </ListItemIcon>
              <ListItemText 
                primary='BPI' 
                secondary='P 55,000' 
                classes={{ primary: classes.primaryText, secondary: classes.secondaryText }}
                />
            </ListItem>
          </List>
        </Collapse>
      </List>

      <Divider />
      {/* Tracking Accounts List */}
      <List>
        <ListItem button dense>
          {listOpen ? <ExpandLess /> : <ExpandMore />}
          <ListItemText 
            primary='TRACKING' 
            secondary='P 100,000'
            classes={{ primary: classes.primaryText, secondary: classes.secondaryText }}  
          />
        </ListItem>
        <Collapse in={listOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button dense>
              <ListItemIcon>
                <Edit /> 
              </ListItemIcon>
              <ListItemText 
                primary='Mutual Fund' 
                secondary='P 100,000'
                classes={{ primary: classes.primaryText, secondary: classes.secondaryText }}
              />
            </ListItem>
          </List>
        </Collapse>
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

/** TO DO
 * MuiTypography-body2 fontSize = '0.75rem'
 */
