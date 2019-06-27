import React, { useState } from 'react';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLogin] = useState(false)
  
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/dashboard' component={DashboardPage} />
      <Route path='/login' render={() => (
        isLoggedIn ? (
          <Redirect to='/dashboard' />
        ) : (
          <LoginPage setLogin={setLogin} />
        )
      )}/>
    </Router>
  );
}

export default App;
