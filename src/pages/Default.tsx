import React from 'react';

import logo from 'assets/photonsquid.svg';

export default function Default({ theme }: {theme: string}) {
  return (
    <div className={theme}>
      <div className="default-app">
        <img src={logo} className="org-logo" alt="logo" />
        <p>
          Woops...
          {' '}
          <br />
          This page isn&apos;t available yet
        </p>
        <a
          className="default-app-link"
          href="https://github.com/photonsquid"
          target="_blank"
          rel="noopener noreferrer"
        >
          But you can follow us on GitHub while we work on it 😉
        </a>
      </div>
    </div>
  );
}
