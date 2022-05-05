import PageLoader from 'components/loading/PageLoader';
import React, { useEffect, useState } from 'react';
import { AiOutlineLogout, AiOutlineClockCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Session from 'utils/Session';

export default function Logout() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="standard-btn b-soft"
      onClick={() => {
        setIsLoading(true);
        Session.logout().then(() => {
          setIsLoading(false);
          navigate('/');
        });
      }}
    >
      {isLoading ? (
        <AiOutlineClockCircle size="1.5em" className="bcontrol-bar-icon btn-icon" />
      ) : (
        <AiOutlineLogout size="1.5em" className="bcontrol-bar-icon btn-icon" />
      )}
    </button>
  );
}
