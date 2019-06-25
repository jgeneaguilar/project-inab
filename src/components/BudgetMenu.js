import React from 'react';
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
// import { makeStyles } from '@material-ui/styles';

const BudgetMenu = ({ anchorEl, handleClose, handleNewBudgetClick }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem
        onClick={handleNewBudgetClick}
      >
        <ListItemIcon>
          <AddCircleOutline />
        </ListItemIcon>
        <ListItemText primary="New Budget" />
      </MenuItem>
    </Menu>
  );
}

export default BudgetMenu;



