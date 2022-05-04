import { isDev } from 'App';

export declare interface LoginData {
  email: string;
  password: string;
}

export declare interface AccountData extends LoginData {
  username: string,
}

export default class Session {
  bearerToken = '';

  apiUrl = 'https://randomapiurl.fr/'; // temporary

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
    return fetch(`${this.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then(async (response) => {
      if (response.ok) {
        this.bearerToken = await response.json();
        localStorage.setItem('bearerToken', this.bearerToken);
      }
      this.bearerToken = response.ok ? this.bearerToken : '';
      return response.ok;
    }).catch(() => false);
  }

  /**
   * A function that logs out the user.
   * @returns true if the logout was successful, false otherwise
   */
  async logout() {
    return fetch(`${this.apiUrl}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.bearerToken}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        this.bearerToken = '';
        localStorage.removeItem('bearerToken');
      }
      return response.ok;
    }).catch(() => false);
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
    }
    if (this.bearerToken === '') {
      return false;
    }
    return isDev() ? true : fetch(`${this.apiUrl}/bearerTest`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.bearerToken}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        this.bearerToken = await response.json();
        localStorage.setItem('bearerToken', this.bearerToken);
      }
      return response.ok;
    }).catch(() => false);
  }

  /**
   * A function that registers a new user.
   * @param accountData the account data to use for the registration
   * @returns true if the registration was successful, false otherwise
   */
  async createUser(accountData: AccountData) {
    return fetch(`${this.apiUrl}/register`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    }).then(async (response) => {
      if (response.ok) {
        this.bearerToken = await response.json();
        localStorage.setItem('bearerToken', this.bearerToken);
      }
      return response.ok;
    }).catch(() => false);
  }
}
