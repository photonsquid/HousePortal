import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'assets/photonsquid.svg';
import ThirdPartyAuth from 'components/ThirdPartyAuth';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { isDev } from 'App';
import Session from 'utils/Session';
import Spinner from 'components/Spinner';

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
  const [isLoading, setIsLoading] = React.useState(false);

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
    setIsLoading(true);
    (isDev() ? session.devlogin() : session.login({
      email,
      password,
    })).then((loginSuccess) => {
      setIsLoading(false);
      if (loginSuccess) {
        navigate('/');
      } else {
        setError('Invalid email or password.');
      }
    });
  }

  function handleRegister() {
    navigate('/register');
  }

  return (
    <div className="credentials-wrapper">
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <div className="card centered centered-content">
        <div className="card-header">
          {isLoading ? (
            <Spinner />
          ) : (
            <img src={logo} className="profile-pic-login" alt="logo" />
          )}
          <h1>Sign in</h1>
          <h3>with a HousePortal account</h3>
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
  );
}

Login.defaultProps = {
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
};
