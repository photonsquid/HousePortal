import React from 'react';

import logo from './photonsquid.svg';

function DefaultPage() {
  return (
    <div className="default-app">
      <header className="default-app-header">
        <img src={logo} className="Org-logo" alt="logo" />
        <p>
          Sorry...
          {' '}
          <br />
          HousePortal isn&apos;t available yet
        </p>
        <a
          className="default-app-link"
          href="https://github.com/photonsquid"
          target="_blank"
          rel="noopener noreferrer"
        >
          But you can follow us on GitHub
        </a>
      </header>
    </div>
  );
}

export default DefaultPage;
