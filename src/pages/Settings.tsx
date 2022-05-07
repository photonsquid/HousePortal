import MainInterface from 'components/MainInterface';
import Authentication from 'components/tabs/Authentication';
import General from 'components/tabs/General';
import TabView from 'components/TabView';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Settings({ theme, toggleTheme }: {theme: string, toggleTheme: () => void}) {
  const { tabName } = useParams();

  return (
    <MainInterface theme={theme} toggleTheme={toggleTheme}>
      <TabView
        tabs={[
          {
            name: 'General',
            content: (<General />),
          },
          {
            name: 'Authentication',
            content: (<Authentication />),
          },
        ]}
        current={tabName || 'General'}
      />
    </MainInterface>
  );
}
