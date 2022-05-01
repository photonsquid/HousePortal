import React from 'react';

export default function ThirdPartyAuth({ type }: {type: string}) {
  if (type === 'login') {
    return (
      <div className="card-note">
        <strong>Or use a third party service to sign in:</strong>
        <div className="tpa-providers">
          No tpa providers yet
        </div>
      </div>
    );
  } if (type === 'register') {
    return (
      <div className="card-note">
        <strong>Or use a third party service to sign up:</strong>
        <div className="tpa-providers">
          No tpa providers yet
        </div>
      </div>
    );
  }
  return (null);
}
