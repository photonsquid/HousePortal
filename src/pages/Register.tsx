import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ThirdPartyAuth from 'components/ThirdPartyAuth';
import ThemeSwitcher from 'components/ThemeSwitcher';
import Session from 'utils/Session';
import SpellCheck, { ContentType } from 'utils/SpellCheck';

export declare interface RegisterProps {
  session: Session,
  theme?: string,
  toggleTheme?: () => void
}

/**
 * A page that allows a user to create an account.
 * @returns {JSX.Element}
 */
export default function Register({ session, theme, toggleTheme }: RegisterProps): JSX.Element {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRed, setPasswordRed] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errorStack, setErrorStack] = React.useState<string[]>([]);
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

  async function handleSubmit() {
    if (checkFormValidity(true)) {
      const success = await session.createUser({
        username,
        email,
        password,
      });
      if (success) {
        navigate('/');
      } else {
        setErrorStack(['Failed to create new user.']);
      }
    }
  }

  useEffect(() => {
    checkFormValidity();
  }, [username, password, passwordRed, email]);

  return (
    <div className="credentials-wrapper">
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <div className="card centered centered-content">
        <div className="card-header">
          <h1>Sign up</h1>
          <h3>create a HousePortal account</h3>
        </div>
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
              className="standard-btn b-error b-shadow"
              onClick={handleCancel}
            >
              Cancel
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

Register.defaultProps = {
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
};
