import React from 'react';

export declare interface DeviceProps {
  icon: JSX.Element,
  name: string,
  owner: string,
  controller: JSX.Element
  info: JSX.Element,
}

export default function Device({
  icon, name, owner, controller, info,
}: DeviceProps) {
  return (
    <div className="dashboard-card device-thumbnail-wrapper">
      <div className="dashboard-card-content centered-content">
        <div className="device-icon-wrapper">
          {icon}
        </div>
        <div className="device-description">
          <h4>{name}</h4>
          <h4 className="text-secondary">{owner}</h4>
        </div>
      </div>
      <div className="device-details-wrapper">
        <div className="device-info">{info}</div>
        <div className="device-controller">{controller}</div>
      </div>
    </div>
  );
}
