/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivacyWrapper({ children }: { children: React.ReactNode }) {
  // TODO: implement this
  const auth = false;

  return (
    <div className="privacy-wrapper">
      {auth ? children : <Navigate to="/login" />}
    </div>
  );
}
