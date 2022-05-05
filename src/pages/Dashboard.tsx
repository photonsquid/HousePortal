import React, { useEffect, useState } from 'react';
import ThemeSwitcher from 'components/ThemeSwitcher';

import logo from 'assets/photonsquid.svg';
import Overview from 'components/Overview';
import ProfileBadge from 'components/ProfileBadge';
import RemoteStorage, { UserInfo } from 'utils/RemoteStorage';
import PageLoader from 'components/loading/PageLoader';

export declare interface DashboardProps {theme: string, toggleTheme: () => void}

export default function Dashboard({ theme, toggleTheme }: DashboardProps): JSX.Element {
  const [profileCardVisible, setProfileCardVisible] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);
  const [isLoading, setIsLoading] = useState(true);

  // fetch user info
  useEffect(() => {
    setIsLoading(true);
    RemoteStorage.getUserInfo().then((info) => {
      setUserInfo(info);
      setIsLoading(false);
    });
  }, []);

  return (
    isLoading ? (
      <PageLoader />
    ) : (
      <div className="dashboard-wrapper">
        <ThemeSwitcher
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div className="dashboard-header">
          <div className="dashboard-header-section">
            <img src={logo} className="profile-pic-sm" alt="logo" />
            <h3>&nbsp;HousePortal</h3>
          </div>
          <div className="dashboard-header-section">
            <ProfileBadge
              visible={profileCardVisible}
              setVisible={setProfileCardVisible}
              userInfo={userInfo}
            />
          </div>
        </div>
        <Overview userInfo={userInfo} />
      </div>
    )
  );
}
