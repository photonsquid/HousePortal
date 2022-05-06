import React from 'react';
import { GoLightBulb } from 'react-icons/go';
import { GiCrosshair } from 'react-icons/gi';
import { UserInfo } from 'utils/RemoteStorage';
import Device from './Device';

export default function Overview({ userInfo }: {userInfo: UserInfo}): JSX.Element {
  return (
    <div className="dashboard-body">
      <div className="dashboard-body-header">
        <h1>
          Hello,
          {' '}
          {userInfo.name.first}
        </h1>
        <h3>Welcome to your dashboard 👋</h3>
      </div>
      <div className="device-list">
        <Device
          icon={<GoLightBulb size="4em" />}
          name="Light Bulb"
          owner="Bedroom"
          controller={(
            <button
              type="button"
              className="standard-btn"
            >
              <strong>On / Off</strong>
            </button>
          )}
          info={(
            <div>
              Philips TrueForce LED E40 HPI Light Bulb
              <br />
              Status:
              {' '}
              <span className="text-success">On</span>
            </div>
          )}

        />
        <Device
          icon={<GiCrosshair size="4em" />}
          name="Air strike"
          owner="North korea"
          controller={(
            <button
              type="button"
              className="standard-btn"
            >
              <strong>Launch</strong>
            </button>
          )}
          info={(
            <div>
              Hwasong-15 Missile
              <br />
              Location: Silo 24
            </div>
          )}
        />
      </div>
    </div>
  );
}
