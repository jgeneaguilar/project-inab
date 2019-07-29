import React, { useState, useEffect } from 'react';
import DashboardView from './DashboardView';
import { getUserDetails } from '../../api/usersAPI';
import { getBudgets } from '../../api/budgetsAPI';


const DashboardContainer = () => {

  const [userDetails, setUserDetails] = useState({});
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    Promise.all([getUserDetails(), getBudgets()])
      .then(([user, budget]) => {
        setUserDetails({
          ...user.data
        });
        setBudgets([
          ...budget.data
        ]);
        console.log('USER DETAILS: ', user.data);
        console.log('BUDGETS: ', budget.data);
      })
      .catch(error => console.error(`API call failed.\n${error}`));
  }, []);

  return (
    <DashboardView 
      userDetails={userDetails} 
      budgets={budgets}
    />
  );
}

export default DashboardContainer;
