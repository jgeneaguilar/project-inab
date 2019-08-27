import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const SessionExpired = props => {

  const [secLeft, setSecLeft] = useState(10);

  useEffect(() => {
    
    const countdown = setInterval(() => {
      setSecLeft(secLeft - 1);
    }, 1000);

    return () => clearInterval(countdown);
   
  }, [secLeft]);

  
  if (secLeft === 0) {
    // window.location = '/login';
    return <Redirect to={{
      pathname: '/login/',
      state: { from: props.location }
    }} />
  }

  return (
    <div>
      <h2>You session has expired. You will be redirected to login page in {secLeft} seconds</h2>
    </div>
  );
}

export default SessionExpired;
