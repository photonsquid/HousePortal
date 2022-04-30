import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import Default from 'pages/Default';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';

import 'App.global.scss';
import PrivacyWrapper from 'components/PrivacyWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="login" element={<Login />} />
        <Route path="default" element={<Default />} />
        <Route
          path="dashboard"
          element={(
            <PrivacyWrapper>
              <Dashboard />
            </PrivacyWrapper>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
