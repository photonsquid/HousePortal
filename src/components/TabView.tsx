import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export declare interface Tab {
  name: string,
  url: string,
  description?: string,
  icon?: JSX.Element,
  content: JSX.Element
}

export declare interface TabCategory {
  name: string,
  tabs: Tab[]
}

export declare interface TabViewProps {
  content: TabCategory[],
  current: string
}

export default function TabView({ content, current }: TabViewProps) {
  const navigate = useNavigate();
  const [tabContent, setTabContent] = useState(content[0].tabs[0].content);

  return (
    <div className="tab-view">
      <div className="tab-list">
        {content.map((category) => (
          <div className="tab-category">
            <div className="tab-category-name">
              {category.name}
            </div>
            {category.tabs.map((tab) => (
              <button
                type="button"
                onClick={() => {
                  navigate(`/settings/${tab.url}`);
                  setTabContent(tab.content);
                }}
                className={`tab ${current === tab.url ? 'enabled' : 'disabled'}`}
                key={tab.name}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>

        ))}
      </div>
      <div className="tab-content">
        {tabContent}
      </div>
    </div>
  );
}
