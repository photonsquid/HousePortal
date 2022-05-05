import React from 'react';

export declare interface DeviceThumbnailProps {
  icon: JSX.Element,
  name: string,
  controller: JSX.Element
}

export default function DeviceThumbnail({ icon, name, controller }: DeviceThumbnailProps) {
  return (
    <div className="dashboard-card centered-content device-thumbnail-wrapper">
      <div className="device-icon-wrapper">
        {icon}
      </div>
      <div className="dashboard-card-content">
        <div className="device-description">
          {name}
        </div>
        {controller}
      </div>
    </div>
  );
}
