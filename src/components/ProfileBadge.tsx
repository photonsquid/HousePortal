/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiEdit3 } from 'react-icons/fi';
import { UserInfo } from 'utils/RemoteStorage';
import { useNavigate } from 'react-router-dom';
import Logout from './buttons/Logout';

export declare interface ProfileBadgeProps {
  visible: boolean,
  setVisible: (visible: boolean) => void
  userInfo: UserInfo
}

export default function ProfileBadge({
  visible, setVisible, userInfo,
}: ProfileBadgeProps): JSX.Element {
  const [isButtonFocused, setIsButtonFocused] = useState(false);
  const [isCardFocused, setIsCardFocused] = useState(false);
  const navigate = useNavigate();
  const onEscPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setVisible(false);
    }
  };

  // escape key is pressed
  useEffect(() => {
    document.addEventListener('keydown', onEscPress);
    return () => {
      document.removeEventListener('keydown', onEscPress);
    };
  });

  // button or card are focused
  useEffect(() => {
    if (isButtonFocused || isCardFocused) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isButtonFocused, isCardFocused]);

  return (
    <div className="profile-badge-wrapper">
      <button
        type="button"
        className="circle-btn b-soft b-shadow"
        onFocus={() => { setIsButtonFocused(true); }}
        onBlur={() => { setIsButtonFocused(false); }}
      >
        <img src={userInfo.picture.thumbnail} className="profile-pic-sm btn-icon" alt="profile-pic" />
      </button>

      <div className="profile-card" style={{ display: visible ? 'block' : 'none' }} tabIndex={0} onFocus={() => { setIsCardFocused(true); }} onBlur={() => { setIsCardFocused(false); }}>
        <div className="profile-card-header centered-content">
          <img src={userInfo.picture.large} className="profile-pic-login" alt="profile-pic" />
          <div className="profile-card-info">
            <h4><strong>{`${userInfo.name.first} ${userInfo.name.last}`}</strong></h4>
            <h5 className="text-secondary">{`${userInfo.email}`}</h5>
          </div>
        </div>
        <div className="profile-card-body">
          <button
            type="button"
            className="standard-btn b-soft"
            onClick={() => {
              navigate('/settings');
            }}
          >
            <IoSettingsOutline size="1.5em" className="bcontrol-bar-icon btn-icon" />
          </button>
          <button
            type="button"
            className="standard-btn b-soft"
          >
            <FiEdit3 size="1.5em" className="bcontrol-bar-icon btn-icon" />
          </button>
          <Logout />
        </div>
        <div className="profile-card-footer">
          <a href="https://github.com/photonsquid/HousePortal/fork" target="_blank" className="footer-href" rel="noreferrer">
            Fork project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
