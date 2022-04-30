import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from 'assets/photonsquid.svg';
import ThirdPartyAuth from 'components/ThirdPartyAuth';

export default function Register() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword1] = React.useState('');
  const [password2, setPassword2] = React.useState('');
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
        setPassword1(value);
        break;
      case 'password2':
        setPassword2(value);
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

  function handleRegister() {
    // database stuff (not implemented yet)
    // atm we're just letting anyone sign up

    console.log('username:', username);
    console.log('password:', password);
    console.log('email:', email);
  }

  return (
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
              className="standard-bt b-error b-shadow"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="standard-bt b-primary b-shadow"
              style={{ float: 'right' }}
              onClick={handleRegister}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
