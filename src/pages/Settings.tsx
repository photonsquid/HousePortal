import MainInterface from 'components/MainInterface';
import TabView, { TabCategory } from 'components/TabView';
import React from 'react';
import { useParams } from 'react-router-dom';
import { BiCog, BiLock } from 'react-icons/bi';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { IoBrushOutline } from 'react-icons/io5';
import Form, { FormElementType, JsonCategory } from 'components/forms/Form';

export class SettingsBody {
  static jsonContent: JsonCategory[] = [
    {
      name: 'Local',
      tabs: [
        {
          name: 'General',
          url: 'general',
          icon: <BiCog size="1.3em" />,
          fields: {},
        },
        {
          name: 'Appearance',
          url: 'appearance',
          icon: <IoBrushOutline size="1.3em" />,
          fields: {
            theme: {
              name: 'Theme',
              type: FormElementType.Select,
              value: 'light',
              options: {
                light: 'Light',
                dark: 'Dark',
              },
              editable: true,
              description: 'The theme of the application',
            },
          },
        },
        {
          name: 'Authentication',
          url: 'authentication',
          icon: <BiLock size="1.3em" />,
          fields: {},
        },
        {
          name: 'Accounts',
          url: 'accounts',
          icon: <MdOutlineAccountCircle size="1.3em" />,
          fields: {},
        },

      ],
    },
    {
      name: 'Remote',
      tabs: [
        {
          name: 'General',
          url: 'remote-general',
          icon: <BiCog size="1.3em" />,
          fields: {},
        },
        {
          name: 'Appearance',
          url: 'remote-appearance',
          icon: <IoBrushOutline size="1.3em" />,
          fields: {},
        },
      ],
    },
  ];

  static getContent(): TabCategory[] {
    return SettingsBody.jsonContent.map((category) => ({
      name: category.name,
      tabs: category.tabs.map((tab) => ({
        name: tab.name,
        url: tab.url,
        icon: tab.icon,
        content: <Form title={tab.name} formData={tab.fields} />,
      })),
    } as TabCategory));
  }
}

export default function Settings({ theme, toggleTheme }: {theme: string, toggleTheme: () => void}) {
  const { tabUrl } = useParams();
  const content = SettingsBody.getContent();

  return (
    <MainInterface theme={theme} toggleTheme={toggleTheme}>
      <TabView
        content={content}
        current={tabUrl || content[0].tabs[0].url}
      />
    </MainInterface>
  );
}
