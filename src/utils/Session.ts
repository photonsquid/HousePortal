import { isDev } from 'App';

export declare interface LoginData {
  email: string;
  password: string;
}

export declare interface AccountData {
  username: string,
  email: string,
  password: string
}

export default class Session {
  bearerToken = '';

  apiUrl = '/api'; // temporary

  /**
   * A function that logs in as a developer:
   * - no actual bearer token is generated
   * - all the data displayed in the UI is mocked
   * @returns true if the login was successful, false otherwise
   */
  async devlogin() {
    this.bearerToken = 'dev';
    return true;
  }

  /**
   * A function that tries to log in the user with the given credentials.
   * @param credentials the credentials to use for the login
   * @returns true if the login was successful, false otherwise
   */
  async login(credentials: LoginData) {
    const response = await fetch(`${this.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      this.bearerToken = await response.json();
      // save the token to local storage
      localStorage.setItem('bearerToken', this.bearerToken);
      return true;
    }
    this.bearerToken = '';
    return false;
  }

  /**
   * A function that logs out the user.
   * @returns true if the logout was successful, false otherwise
   */
  async logout() {
    const response = await fetch(`${this.apiUrl}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.bearerToken}`,
      },
    });
    if (response.ok) {
      this.bearerToken = '';
      localStorage.removeItem('bearerToken');
      return true;
    }
    return false;
  }

  /**
   * A function that checks if the user is logged in.
   * @returns true if the user is logged in, false otherwise
   */
  async isActive() {
    // check if the token is in local storage
    const token = localStorage.getItem('bearerToken');
    if (token) {
      this.bearerToken = token;
      return true;
    }
    if (this.bearerToken === '') {
      return false;
    }
    const response = await fetch(`${this.apiUrl}/bearerTest`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.bearerToken}`,
      },
    });

    return isDev() ? true : response.ok;
  }

  /**
   * A function that registers a new user.
   * @param accountData the account data to use for the registration
   * @returns true if the registration was successful, false otherwise
   */
  async createUser(accountData: AccountData) {
    const response = await fetch(`${this.apiUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });
    if (response.ok) {
      this.bearerToken = await response.json();
      localStorage.setItem('bearerToken', this.bearerToken);
      return true;
    }
    return false;
  }
}
