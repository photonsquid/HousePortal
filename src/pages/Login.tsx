import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'assets/photonsquid.svg';
import ThirdPartyAuth from 'components/ThirdPartyAuth';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { isDev } from 'App';
import Session from 'utils/Session';

export declare interface LoginProps {
  session: Session,
  theme?: string
  toggleTheme?: () => void
}

/**
 * A page that allows a user to log in.
 * @returns {JSX.Element}
 */
export default function Login({ session, theme, toggleTheme }: LoginProps): JSX.Element {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const navigate = useNavigate();

  function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    const { name } = target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  async function handleSubmit() {
    const loginSuccess = await (isDev() ? session.devlogin() : session.login({
      email,
      password,
    }));
    if (loginSuccess) {
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  }

  function handleRegister() {
    navigate('/register');
  }

  return (
    <div className={theme}>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <div className="credentials-wrapper">
        <div className="card centered centered-content">
          <div className="card-header">
            <img src={logo} className="org-logo-sm" alt="logo" />
            <h1>Sign in</h1>
            <h2>with a HousePortal account</h2>
          </div>
          <div className="card-body centered-content">
            {error && <div className="card-note spacing-sm cn-error">{error}</div>}
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
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
              <a href="/retrieve-password" className="password-retrieval">
                Forgot password
              </a>
            </div>
            <ThirdPartyAuth type="login" />
            <div className="login-submit">
              <button
                type="button"
                style={{ float: 'left' }}
                className="standard-btn b-secondary b-shadow"
                onClick={handleRegister}
              >
                Create account
              </button>
              <button
                type="submit"
                className="standard-btn b-primary b-shadow"
                style={{ float: 'right' }}
                onClick={handleSubmit}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.defaultProps = {
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
};
