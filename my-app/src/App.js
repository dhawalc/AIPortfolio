import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is authenticated by calling the backend
    fetch('/auth/dashboard', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      })
      .catch(error => {
        console.error('Error fetching authentication status:', error);
        setIsAuthenticated(false);
        setUser(null);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/auth/dashboard" /> : <Login />} />
            <Route path="/auth/dashboard" element={
              isAuthenticated ? (
                <div>
                  <h2>Dashboard</h2>
                  <p>Welcome to the dashboard, {user && user.displayName}!</p>
                  <a href="/auth/logout">Logout</a>
                </div>
              ) : (
                <Navigate to="/" />
              )
            } />
            <Route path="*" element={
              <div>
                <h2>Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
              </div>
            } />
          </Routes>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
