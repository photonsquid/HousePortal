import React from 'react';
import Overview from 'components/Overview';
import MainInterface from 'components/MainInterface';

export declare interface DashboardProps {theme: string, toggleTheme: () => void}

export default function Dashboard({ theme, toggleTheme }: DashboardProps): JSX.Element {
  return (
    <MainInterface
      theme={theme}
      toggleTheme={toggleTheme}
    >
      <Overview />
    </MainInterface>
  );
}
