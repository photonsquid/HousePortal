import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import 'App.global.scss';

import Default from 'pages/Default';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import PrivacyWrapper from 'components/PrivacyWrapper';
import Register from 'pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="default" element={<Default />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
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
