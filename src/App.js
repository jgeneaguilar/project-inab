import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
    </Router>
  );
}

export default App;
