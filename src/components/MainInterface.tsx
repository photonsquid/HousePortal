/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import RemoteStorage, { UserInfo } from 'utils/RemoteStorage';
import logo from 'assets/photonsquid.svg';
import { useNavigate } from 'react-router-dom';
import PageLoader from './loading/PageLoader';
import ProfileBadge from './ProfileBadge';

export declare interface InterfaceContentProps {
  userInfo: UserInfo,
}

export declare interface MainInterfaceProps {
  children: JSX.Element,
}

export default function MainInterface({ children }: MainInterfaceProps): JSX.Element {
  const [profileCardVisible, setProfileCardVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // fetch user info
  useEffect(() => {
    setIsLoading(true);
    RemoteStorage.fetchUserInfo().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    isLoading ? (
      <PageLoader />
    ) : (
      <div className="main-interface-wrapper">
        <header role="banner">
          <button
            type="button"
            className="undecorated-btn"
            onClick={() => {
              navigate('/');
            }}
          >
            <div className="main-interface-header-section">
              <img src={logo} className="profile-pic-sm" alt="logo" />
              <h3>&nbsp;HousePortal</h3>
            </div>
          </button>
          <div className="main-interface-header-section">
            <ProfileBadge
              visible={profileCardVisible}
              setVisible={setProfileCardVisible}
              userInfo={RemoteStorage.getUserInfo()}
            />
          </div>
        </header>
        <div className="main-interface-content">
          {children}
        </div>
      </div>
    )
  );
}
