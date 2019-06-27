import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import { getUserDetails } from '../api/usersAPI';

const DashboardPage = () => {

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getUserDetails()
      .then(res => {
        setUserDetails({
          ...res.data
        })
      })
  }, []) // Passing an empty array as the 2nd argument will not result to an infinite loop caused calling useState inside useEffect

  return (
    <div>
      <Dashboard 
        userDetails={userDetails}
      />
    </div>
  );
}

export default DashboardPage;
