import React from 'react';
import { useNavigate } from 'react-router-dom';

export declare interface Tab {
  name: string,
  description?: string,
  content: JSX.Element
}

export declare interface TabViewProps {
  tabs: Array<Tab>,
  current: string
}

export default function TabView({ tabs, current }: TabViewProps) {
  const navigate = useNavigate();

  return (
    <div className="tab-view">
      <div className="tab-list">
        {tabs.map((tab) => (
          <button
            type="button"
            onClick={() => {
              navigate(`/settings/${tab.name}`);
            }}
            className={`tab-link standard-btn ${current === tab.name ? 'b-primary' : 'b-soft'} b-shadow`}
            key={tab.name}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.name === current)?.content}
      </div>
    </div>
  );
}
