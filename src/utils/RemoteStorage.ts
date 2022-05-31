import Session from './Session';

export declare interface UserInfo {
  email: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export default class RemoteStorage {
  static apiUrl = 'https://houseportal-api.photonsquid.fr';

  static mockApiUrl = 'https://randomuser.me/api/'; // temporary

  static userInfo: UserInfo;

  /**
   * Attempt to run callback with current bearer. If the bearer is invalid,
   * fetch a new one and try again.
   * @param callback the callback to run
   */
  private static async attemptRequest(callback: () => Promise<unknown>) {
    return callback().catch((error) => {
      if (error.status === 401) {
        return Session.fetchBearer().then(() => callback());
      }
      throw error;
    });
  }

  static async fetchUserInfo() {
    return this.attemptRequest(async () => fetch(`${this.mockApiUrl}?inc=name,email,picture&results=1`)
      .then((response) => response.json())
      .then((data) => data.results[0])
      .then((data) => {
        this.userInfo = data;
      }));
  }

  static getUserInfo() {
    return this.userInfo;
  }

  static async getDevices() {
    return this.attemptRequest(async () => fetch(`${this.apiUrl}/devices`, {
      headers: {
        Authorization: `Bearer ${Session.bearer}`,
      },
    }).then((response) => response.json()));
  }

  static async getDevice(id: string) {
    return this.attemptRequest(async () => fetch(`${this.apiUrl}/devices/${id}`, {
      headers: {
        Authorization: `Bearer ${Session.bearer}`,
      },
    }).then((response) => response.json()));
  }

  static async getUserSettings() {
    return this.attemptRequest(async () => fetch(`${this.apiUrl}/users/settings`, {
      headers: {
        Authorization: `Bearer ${Session.bearer}`,
      },
    }).then((response) => response.json()));
  }

  static async getUserSetting(key: string) {
    return this.attemptRequest(async () => fetch(`${this.apiUrl}/users/settings/${key}`, {
      headers: {
        Authorization: `Bearer ${Session.bearer}`,
      },
    }).then((response) => response.json()));
  }

  static async setUserSetting(key: string, value: string) {
    return this.attemptRequest(async () => fetch(`${this.apiUrl}/users/settings/${key}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${Session.bearer}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    }).then((response) => response.json()));
  }
}
