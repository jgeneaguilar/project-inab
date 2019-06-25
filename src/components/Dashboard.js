import React, { useState, useEffect } from 'react';
import DashboardPage from './DashboardPage';
import { viewDashboard } from '../api/usersAPI';

const Dashboard = () => {

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    viewDashboard()
      .then(res => {
        setUserDetails({
          ...res.data
        })
      })
  }, []) // Passing an empty array as the 2nd argument will not result to an infinite loop caused calling useState inside useEffect

  return (
    <div>
      <DashboardPage 
        userDetails={userDetails}
      />
    </div>
  );
}

export default Dashboard;
