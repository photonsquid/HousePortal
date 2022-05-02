import React, { useState } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import 'App.global.scss';

import Default from 'pages/Default';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import PrivacyWrapper from 'components/PrivacyWrapper';
import Register from 'pages/Register';
import Session from 'utils/Session';

/**
 *  A function that determines if the app is in development mode.
 * @returns {boolean} true if the user is logged in
 */
export function isDev(): boolean {
  return process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
}

/**
 * The main application component.
 * @returns {JSX.Element}
 */
function App(): JSX.Element {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  const session = new Session();
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // save theme preference to local storage
    localStorage.setItem('theme', newTheme);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="login" element={<Login session={session} theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="register" element={<Register session={session} theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="retrieve-password" element={<Default theme={theme} />} />
        <Route
          path="dashboard"
          element={(
            <PrivacyWrapper theme={theme} session={session}>
              <Dashboard />
            </PrivacyWrapper>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
