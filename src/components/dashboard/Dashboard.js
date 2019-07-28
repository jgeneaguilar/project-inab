import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DashboardAppBar from '../DashboardAppBar';
import SideMenu from '../SideMenu';
import BudgetMenu from '../BudgetMenu';
import NewBudgetForm from '../NewBudgetForm';
// import { makeStyles } from '@material-ui/core/styles';


const Dashboard = ({ userDetails, defaultBudget }) => {

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


  // for SideMenu
  const [sideMenuOpen, setSideMenuOpen] = useState(true);

  const handleToggleSideMenu = () => setSideMenuOpen(!sideMenuOpen);

  return (
    <div>
      <DashboardAppBar 
        userDetails={userDetails}
        setAnchorEl={setAnchorEl}
        defaultBudget={defaultBudget}
        handleToggleSideMenu={handleToggleSideMenu}
      />
      <SideMenu 
        sideMenuOpen={sideMenuOpen}
        handleToggleSideMenu={handleToggleSideMenu}
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
