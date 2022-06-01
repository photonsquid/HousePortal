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
import Settings, { SettingsBody } from 'pages/Settings';

/**
 * A function that determines if the app is in development mode.
 * @returns {boolean} true if the user is logged in
 */
export function isDev(): boolean {
  return false;
  return process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

/**
 * The main application component.
 * @returns {JSX.Element}
 */
function App(): JSX.Element {
  const [theme, setTheme] = useState<Theme>((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light));

  // set theme on page load
  useEffect(() => {
    document.getElementsByTagName('html')[0].className = theme;
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (e.matches) {
        setTheme(Theme.Dark);
      } else {
        setTheme(Theme.Light);
      }
    });
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="retrieve-password" element={<Default />} />
        <Route
          path="dashboard"
          element={(
            <PrivacyWrapper>
              <Dashboard />
            </PrivacyWrapper>
          )}
        />
        <Route path="settings">
          <Route
            path=":tabUrl"
            element={(
              <PrivacyWrapper>
                <Settings />
              </PrivacyWrapper>
          )}
          />
          <Route index element={<Navigate to={SettingsBody.jsonContent[0].tabs[0].url} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
