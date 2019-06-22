import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { Avatar } from '@material-ui/core';
import { viewProfile } from '../api/usersAPI';

const Profile = () => {

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    viewProfile()
      .then(res => {
        setUserDetails({
        ...userDetails, ...res.data
        })
      })
  }, []) // Passing an empty array as the 2nd argument will not result to an infinite loop caused calling useState inside useEffect

  return (
    <div>
      <Nav>
        <Avatar src={userDetails.avatar} />
      </Nav>
      <h1>{`Hi ${userDetails.first_name} ${userDetails.last_name}!`}</h1>
      <h2>{`Your username is ${userDetails.username}`}</h2>
      
    </div>
  );

  
}

export default Profile;
