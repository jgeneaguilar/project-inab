import React, { useState } from 'react';
import BudgetMenu from './BudgetMenu';
import NewBudgetForm from './NewBudgetForm';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    
  },
  pageHeader: {
    backgroundColor: 'white',
    margin: 0
  },
});

const Dashboard = ({ userDetails }) => {
  const classes = useStyles();

  // for BudgetMenu
  const [anchorEl, setAnchorEl] = useState(null); 
  
  const handleClose = () => setAnchorEl(null);


  // for NewBudgetForm
  const [dialogOpen, setDialogOpen] = useState(false); 

  const handleNewBudgetClick = () => {
    setDialogOpen(true);
    setAnchorEl(null);
  }

  const handleDialogClose = () => setDialogOpen(false);

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.pageHeader}>
        <Toolbar variant='dense'>
          <Typography>
            <Button
              onClick={event => setAnchorEl(event.currentTarget)}
            >
              My Budget
            </Button>
          </Typography>
          <Avatar src={userDetails.avatar} />
        </Toolbar>
      </AppBar>
      <BudgetMenu 
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleNewBudgetClick={handleNewBudgetClick}
      />
      <NewBudgetForm 
        handleClose={handleDialogClose}
        open={dialogOpen}
      />
    </div>
  );
}

export default Dashboard;
