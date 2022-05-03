import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Session from 'utils/Session';
import PageLoader from 'components/PageLoader';

export declare interface PrivacyWrapperProps {
  children: React.ReactNode,
  session: Session,
  theme?: string,
}

function PrivacyWrapper({ children, theme, session }: PrivacyWrapperProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    session.isActive().then((isActive) => {
      setIsLoading(false);
      setIsLoggedIn(isActive);
    });
  }, [session]);

  // display a spinner if the API request is still loading
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
  return (
    <div className={theme}>
      {content}
    </div>
  );
}

PrivacyWrapper.defaultProps = {
  theme: 'light',
};

export default PrivacyWrapper;
