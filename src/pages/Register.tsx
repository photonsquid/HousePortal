import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ThirdPartyAuth from 'components/ThirdPartyAuth';
import Session from 'utils/Session';
import SpellCheck, { ContentType } from 'utils/SpellCheck';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

/**
 * A page that allows a user to create an account.
 * @returns {JSX.Element}
 */
export default function Register(): JSX.Element {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRed, setPasswordRed] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errorStack, setErrorStack] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  function checkFormValidity(final = false): boolean {
    const stack = [];
    if (password.length + passwordRed.length > 0 && password !== passwordRed) {
      stack.push('Passwords do not match.');
    }
    if (username.length > 0 && !SpellCheck.check(username, ContentType.USERNAME)) {
      stack.push('Username contains invalid characters.');
    }
    if (email.length > 0 && !SpellCheck.check(email, ContentType.EMAIL)) {
      stack.push('Email contains invalid characters.');
    }
    if (password.length > 0 && !SpellCheck.check(password, ContentType.PASSWORD)) {
      stack.push('Password length is invalid.');
    }
    if (final && password.length * passwordRed.length * username.length * email.length === 0) {
      stack.push('Please fill out all fields.');
    }
    setErrorStack(stack);
    return stack.length === 0;
  }

  function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    const { name } = target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password': {
        setPassword(value);
        break;
      }
      case 'passwordRed': {
        setPasswordRed(value);
        break;
      }
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  }

  function handleCancel() {
    navigate('/');
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (checkFormValidity(true)) {
      setIsLoading(true);
      Session.createUser({
        username,
        email,
        pwd: password,
      }).then(() => {
        setTimeout(() => {
          setIsLoading(false);
          navigate('/');
        }, 250);
      }).catch((err) => {
        setTimeout(() => {
          setIsLoading(false);
          setErrorStack([err.message]);
        }, 250);
      });
    }
  }

  useEffect(() => {
    checkFormValidity();
  }, [username, password, passwordRed, email]);

  return (
    <div className="credentials-wrapper">
      <div className="card centered centered-content">
        <div className="card-header">
          <h1>Sign up</h1>
          <h3 className="text-secondary">create a HousePortal account</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-body centered-content">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              onChange={handleInputChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleInputChange}
              style={{ marginBottom: '2rem' }}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleInputChange}
            />
            <input
              type="password"
              id="passwordRed"
              name="passwordRed"
              placeholder="Repeat password"
              required
              onChange={handleInputChange}
            />
            {errorStack.length > 0 && (
            <div className="card-note spacing-sm cn-error">
              {errorStack.map((error) => (<div className="error-line" key={error}>{ error }</div>))}
            </div>
            )}
            <ThirdPartyAuth type="register" />
            <div className="login-submit">
              <button
                type="button"
                style={{ float: 'left' }}
                className="standard-btn error shadow"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={isLoading ? 'loading' : 'form'}
                  addEndListener={(node, done) => {
                    node.addEventListener('transitionend', done, false);
                  }}
                  classNames="fade"
                >
                  <button
                    type="submit"
                    className="standard-btn primary shadow"
                    style={{ float: 'right' }}
                  >
                    {isLoading ? 'Loading...' : 'Continue'}
                  </button>
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Register.defaultProps = {
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
};
