import { isDev } from 'App';
import RemoteStorage from './RemoteStorage';

export declare interface LoginData {
  email: string;
  password: string;
}

export declare interface AccountData extends LoginData {
  username: string,
}

export default class Session {
  static bearerToken = '';

  static apiUrl = 'https://randomapiurl.fr/'; // temporary

  /**
   * A function that logs in as a developer:
   * - no actual bearer token is generated
   * - all the data displayed in the UI is mocked
   */
  static async devlogin() {
    Session.bearerToken = 'dev';
    localStorage.setItem('bearerToken', Session.bearerToken);
  }

  /**
   * A function that tries to log in the user with the given credentials.
   * @param credentials the credentials to use for the login
   */
  static async login(credentials: LoginData) {
    fetch(`${Session.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then(async (response) => {
      if (response.ok) {
        Session.bearerToken = await response.json();
        localStorage.setItem('bearerToken', Session.bearerToken);
      }
      Session.bearerToken = response.ok ? Session.bearerToken : '';
    });
  }

  /**
   * A function that logs out the user.
   */
  static async logout() {
    // Dev logout
    if (isDev()) {
      Session.bearerToken = '';
      localStorage.removeItem('bearerToken');
      return;
    }

    // Real logout
    fetch(`${Session.apiUrl}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Session.bearerToken}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        Session.bearerToken = '';
        localStorage.removeItem('bearerToken');
      }
    });
  }

  /**
   * A function that checks if the user is logged in.
   * @returns true if the user is logged in, false otherwise
   */
  static async isActive() {
    // check if the token is in local storage
    const token = localStorage.getItem('bearerToken');
    if (token) {
      Session.bearerToken = token;
    }
    if (Session.bearerToken === '') {
      return false;
    }
    return isDev() ? true : fetch(`${Session.apiUrl}/bearerTest`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Session.bearerToken}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        Session.bearerToken = await response.json();
        localStorage.setItem('bearerToken', Session.bearerToken);
      }
      return response.ok;
    }).catch(() => false);
  }

  /**
   * A function that registers a new user.
   * @param accountData the account data to use for the registration
   */
  static async createUser(accountData: AccountData) {
    fetch(`${Session.apiUrl}/register`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    }).then(async (response) => {
      if (response.ok) {
        Session.bearerToken = await response.json();
        localStorage.setItem('bearerToken', Session.bearerToken);
      }
    });
  }
}
