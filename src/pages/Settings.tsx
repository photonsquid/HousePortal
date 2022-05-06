import Authentication from 'components/tabs/Authentication';
import General from 'components/tabs/General';
import TabView from 'components/TabView';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Settings() {
  const { tabName } = useParams();

  return (
    <div className="settings-wrapper">
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
    </div>
  );
}
