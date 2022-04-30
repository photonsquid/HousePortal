import React from 'react';
import { useNavigate } from 'react-router-dom';

interface State {
  username: string;
  password: string;
  remember: boolean;
}

export default class Login extends React.Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      username: '',
      password: '',
      remember: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLTextAreaElement;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    } as unknown as Pick<State, keyof State>);
  }

  handleCheckBoxChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.checked;
    const { name } = target;
    this.setState({
      [name]: value,
    } as unknown as Pick<State, keyof State>);
  }

  handleLogin() {
    // database stuff (not implemented yet)
    // atm we're just letting anyone login
    const { username, password, remember } = this.state;
  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="card centered centered-content">
          <div className="card-header">
            <h1>Sign in</h1>
            <h2>HousePortal account</h2>
          </div>
          <div className="card-body centered-content">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Email or username"
              required
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              onChange={this.handleInputChange}
            />

            <div className="settings-banner left-aligned">
              <a href="htpps://example.com" className="password-retrieval">
                Forgot password
              </a>
            </div>
            <div className="login-submit">
              <button
                type="button"
                style={{ float: 'left' }}
                className="standard-bt b-secondary b-shadow"
              >
                Create account
              </button>
              <button
                type="submit"
                className="standard-bt b-primary b-shadow"
                style={{ float: 'right' }}
                onClick={this.handleLogin}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
