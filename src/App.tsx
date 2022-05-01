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
  const [bearer, setBearer] = useState('');
  const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="default" element={<Default />} />
        <Route path="login" element={<Login setBearer={setBearer} theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="register" element={<Register theme={theme} toggleTheme={toggleTheme} />} />
        <Route
          path="dashboard"
          element={(
            <PrivacyWrapper bearer={bearer}>
              <Dashboard />
            </PrivacyWrapper>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
