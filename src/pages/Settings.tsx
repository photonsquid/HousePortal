import MainInterface from 'components/MainInterface';
import Authentication from 'components/tabs/Authentication';
import General from 'components/tabs/General';
import TabView, { TabCategory } from 'components/TabView';
import React from 'react';
import { useParams } from 'react-router-dom';
import { BiCog, BiLock } from 'react-icons/bi';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { IoBrushOutline } from 'react-icons/io5';

export class SettingsBody {
  static content: TabCategory[] = [
    {
      name: 'Local',
      tabs: [
        {
          name: 'General',
          url: 'general',
          icon: <BiCog size="1.3em" />,
          content: (<General />),
        },
        {
          name: 'Appearance',
          url: 'appearance',
          icon: <IoBrushOutline size="1.3em" />,
          content: (<h2>Appearance</h2>),
        },
        {
          name: 'Authentication',
          url: 'authentication',
          icon: <BiLock size="1.3em" />,
          content: (<Authentication />),
        },
        {
          name: 'Accounts',
          url: 'accounts',
          icon: <MdOutlineAccountCircle size="1.3em" />,
          content: (<h2>Accounts</h2>),
        },
      ],
    },

    {
      name: 'Remote login',
      tabs: [
        {
          name: 'General',
          url: 'remote-general',
          icon: <BiCog size="1.3em" />,
          content: (<General />),
        },
        {
          name: 'Appearance',
          url: 'remote-appearance',
          icon: <IoBrushOutline size="1.3em" />,
          content: (<h2>Appearance</h2>),
        },
      ],
    },
  ];
}

export default function Settings({ theme, toggleTheme }: {theme: string, toggleTheme: () => void}) {
  const { tabUrl } = useParams();

  return (
    <MainInterface theme={theme} toggleTheme={toggleTheme}>
      <TabView
        content={SettingsBody.content}
        current={tabUrl || SettingsBody.content[0].tabs[0].url}
      />
    </MainInterface>
  );
}
