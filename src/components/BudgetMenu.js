import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import FolderOpen from '@material-ui/icons/FolderOpen';
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
      <MenuItem
        
      >
        <ListItemIcon>
          <FolderOpen />
        </ListItemIcon>
        <ListItemText primary="Open Budget" />
      </MenuItem>
    </Menu>
  );
}

BudgetMenu.propTypes = {
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  handleNewBudgetClick: PropTypes.func.isRequired
};

export default BudgetMenu;



