import { isDev } from 'App';

export declare interface LoginData {
  email: string;
  pwd: string;
}

export declare interface AccountData extends LoginData {
  username: string,
}

export default class Session {
  static bearer = '';

  static userToken = '';

  static apiUrl = 'https://randomapiurl.fr'; // temporary

  /**
   * A function that requests a new bearer token.
   * Should be called when the user's session has expired.
   */
  private static async fetchBearer() {
    return fetch(`${Session.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: Session.userToken,
      }),
    }).then(async (response) => {
      if (response.ok) {
        Session.bearer = await response.json().then((data) => data.bearer);
        localStorage.setItem('bearer', Session.bearer);
      }
    });
  }

  /**
   * A function that logs in as a developer:
   * - no actual bearer token is generated
   * - all the data displayed in the UI is mocked
   */
  static async devlogin() {
    Session.bearer = 'devBearer';
    Session.userToken = 'devToken';
    localStorage.setItem('bearer', Session.bearer);
    localStorage.setItem('userToken', Session.userToken);
  }

  /**
   * A function that tries to log in the user with the given credentials.
   * @param credentials the credentials to use for the login
   */
  static async login(credentials: LoginData) {
    return fetch(`${Session.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then(async (response) => {
      if (response.ok) {
        [Session.bearer, Session.userToken] = await response.json().then(
          (data) => [data.bearer, data.token],
        );
        localStorage.setItem('bearer', Session.bearer);
        localStorage.setItem('userToken', Session.userToken);
      } else {
        Session.bearer = '';
        Session.userToken = '';
      }
    });
  }

  /**
   * A function that logs out the user.
   */
  static async logout() {
    // Dev logout
    if (isDev()) {
      Session.bearer = '';
      localStorage.removeItem('bearer');
      localStorage.removeItem('userToken');
      return Promise.resolve();
    }

    // Real logout
    return fetch(`${Session.apiUrl}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Session.bearer}`,
      },
    }).then(async () => {
      // the response doesn't matter, either the server deprecates
      // the bearer token or it has already been invalidated in the past
      Session.bearer = '';
      Session.userToken = '';
      localStorage.removeItem('bearer');
      localStorage.removeItem('userToken');
    });
  }

  /**
   * A function that checks if the user is logged in.
   * @returns true if the user is logged in, false otherwise
   */
  static async isActive() {
    const bearer = localStorage.getItem('bearer');
    const userToken = localStorage.getItem('userToken');
    if (userToken && userToken.length > 0) {
      Session.userToken = userToken;
      if (bearer && bearer.length > 0) {
        Session.bearer = bearer;
      }
      return true;
    }
    return false;
  }

  /**
   * A function that registers a new user.
   * @param accountData the account data to use for the registration
   */
  static async createUser(accountData: AccountData) {
    return fetch(`${Session.apiUrl}/register`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    }).then(async (response) => {
      if (response.ok) {
        [Session.bearer, Session.userToken] = await response.json().then(
          (data) => [data.bearer, data.token],
        );
        localStorage.setItem('bearer', Session.bearer);
        localStorage.setItem('userToken', Session.userToken);
      }
    });
  }
}
