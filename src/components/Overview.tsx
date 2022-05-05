import React from 'react';
import { GiVibratingBall } from 'react-icons/gi';
import { FaToilet } from 'react-icons/fa';
import { UserInfo } from 'utils/RemoteStorage';
import DeviceThumbnail from './DeviceThumbnail';

export default function Overview({ userInfo }: {userInfo: UserInfo}): JSX.Element {
  return (
    <div className="dashboard-body">
      <div className="dashboard-body-header">
        <h1>
          Hi
          {' '}
          {userInfo.name.first}
        </h1>
        <h3>Welcome to your dashboard 👋</h3>
      </div>
      <div className="device-list">
        <DeviceThumbnail
          icon={<GiVibratingBall size="4em" />}
          name="Smart Vibrator"
          controller={(
            <button
              type="button"
              className="standard-btn"
            >
              <strong>Orgasm</strong>
            </button>
      )}
        />
        <DeviceThumbnail
          icon={<FaToilet size="4em" />}
          name="Smart Toilet"
          controller={(
            <button
              type="button"
              className="standard-btn"
            >
              <strong>Flush</strong>
            </button>
      )}
        />
      </div>
    </div>
  );
}
