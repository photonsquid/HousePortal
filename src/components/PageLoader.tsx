import React from 'react';
import Spinner from './Spinner';

/**
 * A lightweight spinner component.
 * @returns {JSX.Element}
 */
export default function PageLoader({ message }: {message?: string}): JSX.Element {
  return (
    <div className="spinner-wrapper">
      <Spinner />
      <div className="spinner-message">
        {message}
      </div>
    </div>
  );
}

PageLoader.defaultProps = {
  message: 'Loading...',
};
