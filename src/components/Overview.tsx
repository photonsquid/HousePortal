import React from 'react';
import { GoLightBulb } from 'react-icons/go';
import { GiLed } from 'react-icons/gi';
import RemoteStorage from 'utils/RemoteStorage';
import Device from './Device';

export default function Overview(): JSX.Element {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>
          Hello,
          {' '}
          {RemoteStorage.getUserInfo().name.first}
        </h1>
        <h3>Welcome to your dashboard 👋</h3>
      </div>
      <div className="device-list">
        <Device
          icon={<GiLed size="4em" />}
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
          icon={<GoLightBulb size="4em" />}
          name="Light Bulb"
          owner="Living Room"
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
              BlitzWolf BlitzWolf BW-LT27 AC100-240V
              <br />
              Status:
              {' '}
              <span className="text-error">Off</span>
            </div>
          )}
        />
      </div>
    </div>
  );
}
