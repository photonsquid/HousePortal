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
            <h2>House portal</h2>
          </div>
          <div className="dashboard-header-section">
            <button
              type="button"
              className="standard-btn b-soft b-shadow"
            >
              <strong>User settings</strong>
            </button>
            <img src="https://avatars.githubusercontent.com/u/46868627?v=4" className="profile-pic-sm" alt="logo" style={{ margin: '0 10px' }} />
          </div>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-body-header">
            <h1>Hi Philippe</h1>
            <h3>Welcome to your dashboard 👋</h3>
          </div>
          <div className="dashboard-card">
            <h2>This is a dashboard card</h2>
            <h3>And it&apos;s fucking useless</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
