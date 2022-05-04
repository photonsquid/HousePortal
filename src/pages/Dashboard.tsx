import React from 'react';
import ThemeSwitcher from 'components/ThemeSwitcher';

import logo from 'assets/photonsquid.svg';

export declare interface DashboardProps {theme: string, toggleTheme: () => void}

export default function Dashboard({ theme, toggleTheme }: DashboardProps): JSX.Element {
  return (
    <div className={theme}>
      <div className="dashboard-wrapper">
        <ThemeSwitcher
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div className="dashboard-header">
          <div className="dashboard-header-section">
            <img src={logo} className="profile-pic-sm" alt="logo" style={{ margin: '0 10px' }} />
            <h3>HousePortal</h3>
          </div>
          <div className="dashboard-header-section">
            <button
              type="button"
              className="standard-btn b-soft b-shadow"
            >
              <strong>User settings</strong>
            </button>
            <button
              type="button"
              className="round-btn b-soft b-shadow"
            >
              <img src="https://avatars.githubusercontent.com/u/46868627?v=4" className="profile-pic-sm" alt="logo" style={{ margin: '0 10px' }} />
            </button>
          </div>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-body-header">
            <h1>Hi Philippe</h1>
            <h3>Welcome to your dashboard 👋</h3>
          </div>
          <div className="dashboard-card">
            <h2>This could be a lamp</h2>
            <h3>But it isn&apos;t so don&apos;t fucking click it you retard</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
