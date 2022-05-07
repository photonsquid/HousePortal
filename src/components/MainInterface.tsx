/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import RemoteStorage, { UserInfo } from 'utils/RemoteStorage';
import logo from 'assets/photonsquid.svg';
import PageLoader from './loading/PageLoader';
import ProfileBadge from './ProfileBadge';
import ThemeSwitcher from './ThemeSwitcher';

export declare interface InterfaceContentProps {
  userInfo: UserInfo,
}

export declare interface MainInterfaceProps {
  children: JSX.Element,
  theme: string,
  toggleTheme: () => void,
}

export default function MainInterface(
  {
    children, theme, toggleTheme,
  }: MainInterfaceProps,
): JSX.Element {
  const [profileCardVisible, setProfileCardVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        <ThemeSwitcher
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div className="main-interface-header">
          <div className="main-interface-header-section">
            <a href="/">
              <img src={logo} className="profile-pic-sm" alt="logo" />
            </a>
            <h3>&nbsp;HousePortal</h3>
          </div>
          <div className="main-interface-header-section">
            <ProfileBadge
              visible={profileCardVisible}
              setVisible={setProfileCardVisible}
              userInfo={RemoteStorage.getUserInfo()}
            />
          </div>
        </div>
        {children}
      </div>
    )
  );
}
