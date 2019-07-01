import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import { getUserDetails } from '../api/usersAPI';
import { getBudgets } from '../api/budgetsAPI';

const DashboardPage = () => {

  const [userDetails, setUserDetails] = useState({});
  const [budgets, setBudgets] = useState([]);
  const [defaultBudget, setDefaultBudget] = useState({});

  useEffect(() => {
    Promise.all([getUserDetails(), getBudgets()])
      .then(([user, budget]) => {
        setDefaultBudget({
          ...budget.data[0]
        });
        setUserDetails({
          ...user.data
        });
        setBudgets({
          ...budget.data
        });
        console.log('USER DETAILS: ', user.data, 'DEFAULT BUDGET: ', budget.data[0], 'BUDGETS: ', budget.data)
      });
  }, []);

  return (
    <div>
      <Dashboard 
        userDetails={userDetails}
        defaultBudget={defaultBudget}
      />
    </div>
  );
}

export default DashboardPage;
