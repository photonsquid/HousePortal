import React, { useState } from 'react';
import { AiOutlineLogout, AiOutlineClockCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Session from 'utils/Session';

export default function Logout() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={isLoading ? 'loading' : 'form'}
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done, false);
        }}
        classNames="fade"
      >
        <button
          type="button"
          className="standard-btn soft"
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
      </CSSTransition>
    </SwitchTransition>
  );
}
