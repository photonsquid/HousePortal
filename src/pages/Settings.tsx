import MainInterface from 'components/MainInterface';
import Authentication from 'components/tabs/Authentication';
import General from 'components/tabs/General';
import TabView from 'components/TabView';
import React from 'react';
import { useParams } from 'react-router-dom';
import { BiCog, BiLock } from 'react-icons/bi';
import { MdOutlineAccountCircle } from 'react-icons/md';

export default function Settings({ theme, toggleTheme }: {theme: string, toggleTheme: () => void}) {
  const { tabName } = useParams();

  return (
    <MainInterface theme={theme} toggleTheme={toggleTheme}>
      <TabView
        tabs={[
          {
            name: 'General',
            icon: <BiCog size="1.3em" />,
            content: (<General />),
          },
          {
            name: 'Authentication',
            icon: <BiLock size="1.3em" />,
            content: (<Authentication />),
          },
          {
            name: 'Accounts',
            icon: <MdOutlineAccountCircle size="1.3em" />,
            content: (<h2>Accounts</h2>),
          },
        ]}
        current={tabName || 'General'}
      />
    </MainInterface>
  );
}
