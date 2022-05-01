import React from 'react';
import { useNavigate } from 'react-router-dom';

import ThirdPartyAuth from 'components/ThirdPartyAuth';
import ThemeSwitcher from 'components/ThemeSwitcher';

export declare interface AccountData {
  username: string,
  email: string,
  password: string
}

async function requestAccountCreation(accountData: AccountData) {
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(accountData),
  });
  const result = await response.json();
  return result;
}

export declare interface RegisterProps {
  theme?: string,
  toggleTheme?: () => void
}

/**
 * A page that allows a user to create an account.
 * @returns {JSX.Element}
 */
export default function Register({ theme, toggleTheme }: RegisterProps): JSX.Element {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRed, setPasswordRed] = React.useState('');
  const [email, setEmail] = React.useState('');
  const navigate = useNavigate();

  function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    const { name } = target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password1':
        setPassword(value);
        break;
      case 'password2':
        setPasswordRed(value);
        break;
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
    if (password === passwordRed) {
      await requestAccountCreation({
        username,
        email,
        password,
      });
      navigate('/');
    }
  }

  return (
    <div className={theme}>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <div className="credentials-wrapper">
        <div className="card centered centered-content">
          <div className="card-header">
            <h1>Sign up</h1>
            <h2>create a HousePortal account</h2>
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
              id="password1"
              name="password1"
              placeholder="Password"
              required
              onChange={handleInputChange}
            />
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="Repeat password"
              required
              onChange={handleInputChange}
            />
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
    </div>
  );
}

Register.defaultProps = {
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
};
