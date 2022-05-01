import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from 'assets/photonsquid.svg';
import ThirdPartyAuth from 'components/ThirdPartyAuth';

export declare interface LoginData {
  email: string,
  password: string
}

/**
 * A function that tries to log in the user with the given credentials.
 * @param credentials the credentials to use for the login
 * @returns json object with the response from the server
 */
async function requestLogin(credentials: LoginData) {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const result = await response.json();
  return result;
}

export declare interface LoginProps {
  setBearer: (bearer: string) => void,
  theme?: string
}

/**
 * A page that allows a user to log in.
 * @returns {JSX.Element}
 */
export default function Login({ setBearer, theme }: LoginProps): JSX.Element {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
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
    const bearer = await requestLogin({
      email,
      password,
    });
    setBearer(bearer);
    navigate('/');
  }

  function handleRegister() {
    navigate('/register');
  }

  return (
    <div className={theme}>
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
              <a href="htpps://example.com" className="password-retrieval">
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
};
