/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivacyWrapper({ children, bearer }: { children: React.ReactNode, bearer: string }) {
  // TODO: implement this
  const auth = bearer.length > 0;

  return (
    <div className="privacy-wrapper">
      {auth ? children : <Navigate to="/login" />}
    </div>
  );
}

export default PrivacyWrapper;
