import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'assets/photonsquid.svg';
import ThirdPartyAuth from 'components/ThirdPartyAuth';
import Spinner from 'components/loading/Spinner';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Session from 'utils/Session';

/**
 * A page that allows a user to log in.
 * @returns {JSX.Element}
 */
export default function Login(): JSX.Element {
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'seba12.04@orange.fr' && password === 'kaliningrad') {
        Session.devlogin();
        navigate('/');
      } else {
        setError('Invalid email or password.');
      }
    }, 500);
  }

  function handleRegister() {
    navigate('/register');
  }

  return (
    <div className="credentials-wrapper">
      <div className="card centered centered-content">
        <div className="card-header centered-content">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={isLoading ? 'loading' : 'form'}
              addEndListener={(node, done) => {
                node.addEventListener('transitionend', done, false);
              }}
              classNames="fade"
            >
              {isLoading ? (
                <div className="login-loading-wrapper centered-content">
                  <Spinner />
                </div>
              ) : (
                <img src={logo} className="profile-pic-login" alt="logo" />)}
            </CSSTransition>
          </SwitchTransition>
          <h1>Sign in</h1>
          <h3 className="text-secondary">with a HousePortal account</h3>
        </div>
        <form onSubmit={handleSubmit}>
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
                className="standard-btn secondary shadow left-float"
                onClick={handleRegister}
              >
                Create account
              </button>
              <button
                type="submit"
                className="standard-btn primary shadow right-float"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.defaultProps = {
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
};
