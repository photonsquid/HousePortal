import React from 'react';

/**
 * A lightweight spinner component.
 * @returns {JSX.Element}
 */
export default function Spinner({ message }: {message?: string}): JSX.Element {
  return (
    <div className="spinner-wrapper">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="spinner-message">
        {message}
      </div>
    </div>
  );
}

Spinner.defaultProps = {
  message: 'Loading...',
};
