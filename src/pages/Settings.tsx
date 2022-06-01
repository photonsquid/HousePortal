import MainInterface from 'components/MainInterface';
import TabView, { TabCategory } from 'components/TabView';
import React from 'react';
import { useParams } from 'react-router-dom';
import { BiCog, BiLock } from 'react-icons/bi';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { IoBrushOutline } from 'react-icons/io5';
import Form, { FieldType, JsonCategory } from 'components/forms/Form';
import RemoteStorage from 'utils/RemoteStorage';

export class SettingsBody {
  static jsonContent: JsonCategory[] = [
    {
      name: 'Local',
      tabs: [
        {
          name: 'General',
          url: 'general',
          icon: <BiCog size="1.3em" />,
          fields: [
            {
              name: 'Size of your dick',
              id: 'dick-size',
              type: FieldType.Select,
              default: 'small',
              options: {
                small: 'Small',
                medium: 'Medium',
                large: 'Large',
                enormous: 'Enormous',
              },
              editable: true,
              description: 'The size of your dick',
            },
          ],
        },
        {
          name: 'Appearance',
          url: 'appearance',
          icon: <IoBrushOutline size="1.3em" />,
          fields: [
            {
              name: 'Theme',
              id: 'theme-select',
              type: FieldType.Select,
              default: 'light',
              options: {
                light: 'Light',
                system: 'System',
                dark: 'Dark',
              },
              editable: true,
              description: 'The theme of the application',
            },
            {
              name: 'Theme',
              id: 'theme-radiobutton',
              type: FieldType.Radio,
              default: 'light',
              options: {
                light: 'Light',
                system: 'System',
                dark: 'Dark',
              },
              editable: true,
              description: 'The theme of the application',

            },
          ],
        },
        {
          name: 'Authentication',
          url: 'authentication',
          icon: <BiLock size="1.3em" />,
          fields: [],
        },
        {
          name: 'Accounts',
          url: 'accounts',
          icon: <MdOutlineAccountCircle size="1.3em" />,
          fields: [],
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
          fields: [],
        },
        {
          name: 'Appearance',
          url: 'remote-appearance',
          icon: <IoBrushOutline size="1.3em" />,
          fields: [],
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
        content: <Form
          title={tab.name}
          formData={tab.fields}
          fieldActions={{
            get: (id: string) => RemoteStorage.getUserSetting(id),
            set: (id: string, value: string) => RemoteStorage.setUserSetting(id, value),
          }}
        />,
      })),
    } as TabCategory));
  }
}

export default function Settings() {
  const { tabUrl } = useParams();
  const content = SettingsBody.getContent();

  return (
    <MainInterface>
      <TabView
        content={content}
        current={tabUrl || content[0].tabs[0].url}
      />
    </MainInterface>
  );
}
