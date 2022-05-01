/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Session from 'utils/Session';

function PrivacyWrapper({ children, session }: { children: React.ReactNode, session: Session }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    session.isActive().then((isActive) => {
      setIsLoading(false);
      setIsLoggedIn(isActive);
    });
  }, [session]);

  return (
    isLoading ? (
      <div className="privacy-wrapper">
        <div className="spinner-wrapper">
          Loading
          <div className="spinner" />
        </div>
      </div>
    ) : (
      <div className="privacy-wrapper">
        {isLoggedIn ? children : <Navigate to="/login" />}
      </div>
    )
  );
}

export default PrivacyWrapper;
