import React from 'react';
import Login from './Login';

import Dashboard from './Dashboard';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {

  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return <Dashboard/>
}

export default App;
