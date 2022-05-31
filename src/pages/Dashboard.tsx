import React from 'react';
import Overview from 'components/Overview';
import MainInterface from 'components/MainInterface';

export default function Dashboard(): JSX.Element {
  return (
    <MainInterface>
      <Overview />
    </MainInterface>
  );
}
