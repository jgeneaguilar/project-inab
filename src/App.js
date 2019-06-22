import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLogin] = useState(false)

  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/login' render={() => (
        isLoggedIn ? (
          <Redirect to='/profile' />
        ) : (
          <Login setLogin={setLogin} />
        )
      )}/>
    </Router>
  );
}

export default App;
