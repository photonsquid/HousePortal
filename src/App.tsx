import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import 'App.global.scss';

import Default from 'pages/Default';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import PrivacyWrapper from 'components/PrivacyWrapper';
import Register from 'pages/Register';
import Settings from 'pages/Settings';

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
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.getElementsByTagName('html')[0].className = newTheme;
    // save theme preference to local storage
    localStorage.setItem('theme', newTheme);
  };

  // set theme on page load
  useEffect(() => {
    document.getElementsByTagName('html')[0].className = theme;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="login" element={<Login theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="register" element={<Register theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="retrieve-password" element={<Default theme={theme} />} />
        <Route
          path="dashboard"
          element={(
            <PrivacyWrapper>
              <Dashboard theme={theme} toggleTheme={toggleTheme} />
            </PrivacyWrapper>
          )}
        />
        <Route path="settings">
          <Route
            path=":tabName"
            element={(
              <PrivacyWrapper>
                <Settings />
              </PrivacyWrapper>
          )}
          />
          <Route index element={<Navigate to="General" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
