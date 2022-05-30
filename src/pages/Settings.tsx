import MainInterface from 'components/MainInterface';
import TabView, { Tab, TabCategory } from 'components/TabView';
import React from 'react';
import { useParams } from 'react-router-dom';
import { BiCog, BiLock } from 'react-icons/bi';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { IoBrushOutline } from 'react-icons/io5';
import Form from 'components/forms/Form';

export declare interface JsonCategory {
  name: string,
  tabs: {
    name: string,
    url: string,
    icon: JSX.Element,
    fields: FormData
  }[],
}

export class SettingsBody {
  static jsonContent: JsonCategory[] = [
    {
      name: 'Local',
      tabs: [
        {
          name: 'General',
          url: 'general',
          icon: <BiCog size="1.3em" />,
          fields: {
            GeneralTestField: 'testvalue',
            GeneralTestField2: 'testvalue',
            GeneralTestField3: 'testvalue',
            GeneralTestField4: 'testvalue',
            GeneralTestField5: 'testvalue',
            GeneralTestField6: 24,
            GeneralTestField7: true,

          },
        },
        {
          name: 'Appearance',
          url: 'appearance',
          icon: <IoBrushOutline size="1.3em" />,
          fields: {
            AppearanceTestField: 'testvalue',
          },
        },
        {
          name: 'Authentication',
          url: 'authentication',
          icon: <BiLock size="1.3em" />,
          fields: {
            testfield: 'testvalue',
          },
        },
        {
          name: 'Accounts',
          url: 'accounts',
          icon: <MdOutlineAccountCircle size="1.3em" />,
          fields: {
            testfield: 'testvalue',
          },
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
          fields: {
            testfield: 'testvalue',
          },
        },
        {
          name: 'Appearance',
          url: 'remote-appearance',
          icon: <IoBrushOutline size="1.3em" />,
          fields: {
            testfield: 'testvalue',
          },
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

export declare interface FormData {
  [key: string]: string | number | boolean | FormData;
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
