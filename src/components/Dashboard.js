import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DashboardAppBar from './DashboardAppBar';
import BudgetMenu from './BudgetMenu';
import NewBudgetForm from './NewBudgetForm';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    
  }
});

const Dashboard = ({ userDetails, defaultBudget }) => {
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
      <DashboardAppBar 
        userDetails={userDetails}
        setAnchorEl={setAnchorEl}
        defaultBudget={defaultBudget}
      />
      <BudgetMenu 
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleNewBudgetClick={handleNewBudgetClick}
      />
      <NewBudgetForm 
        handleDialogClose={handleDialogClose}
        open={dialogOpen}
      />
    </div>
  );
}

Dashboard.propTypes = {
  userDetails: PropTypes.object.isRequired,
}

export default Dashboard;
