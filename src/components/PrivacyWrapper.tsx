import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Session from 'utils/Session';
import PageLoader from 'components/loading/PageLoader';

export declare interface PrivacyWrapperProps {
  children: React.ReactNode,
}

function PrivacyWrapper({ children }: PrivacyWrapperProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    Session.isActive().then((isActive) => {
      setIsLoading(false);
      setIsLoggedIn(isActive);
    });
  });

  // display a spinner if the request is still loading
  let content;
  if (isLoading) {
    content = (
      <div className="loading-page-wrapper">
        <PageLoader message="Logging in" />
      </div>
    );
  } else {
    content = (
      <div className="privacy-wrapper">
        {isLoggedIn ? children : <Navigate to="/login" />}
      </div>
    );
  }
  return content;
}

export default PrivacyWrapper;
