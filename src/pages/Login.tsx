import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'assets/photonsquid.svg';
import ThirdPartyAuth from 'components/ThirdPartyAuth';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    const { name } = target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  function handleLogin() {
    // database stuff (not implemented yet)
    // atm we're just letting anyone sign up
    console.log('username:', username);
    console.log('password:', password);
  }

  function handleRegister() {
    navigate('/register');
  }

  return (
    <div className="credentials-wrapper">
      <div className="card centered centered-content">
        <div className="card-header">
          <img src={logo} className="org-logo-sm" alt="logo" />
          <h1>Sign in</h1>
          <h2>with a HousePortal account</h2>
        </div>
        <div className="card-body centered-content">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Email or username"
            required
            onChange={handleInputChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleInputChange}
          />

          <div className="settings-banner left-aligned">
            <a href="htpps://example.com" className="password-retrieval">
              Forgot password
            </a>
          </div>
          <ThirdPartyAuth type="login" />
          <div className="login-submit">
            <button
              type="button"
              style={{ float: 'left' }}
              className="standard-bt b-secondary b-shadow"
              onClick={handleRegister}
            >
              Create account
            </button>
            <button
              type="submit"
              className="standard-bt b-primary b-shadow"
              style={{ float: 'right' }}
              onClick={handleLogin}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
