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

  /**
   * A function that logs in as a developer:
   * - no actual bearer token is generated
   * - all the data displayed in the UI is mocked
   */
  devlogin() {
    this.bearerToken = 'dev';
  }

  /**
   * A function that tries to log in the user with the given credentials.
   * @param credentials the credentials to use for the login
   * @returns json object with the response from the server
   */
  async login(credentials: LoginData) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    this.bearerToken = await response.json();
    // save the token to local storage
    localStorage.setItem('bearerToken', this.bearerToken);
  }

  /**
   * A function that logs out the user.
   */
  async logout() {
    await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.bearerToken}`,
      },
    });
    this.bearerToken = '';
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
    const response = await fetch('/api/bearerTest', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.bearerToken}`,
      },
    });
    return response.ok;
  }

  /**
   * A function that registers a new user.
   * @param accountData the account data to use for the registration
   */
  async createUser(accountData: AccountData) {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });
    this.bearerToken = await response.json();
  }
}
