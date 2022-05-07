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
  static storageUrl = 'https://randomuser.me/api/'; // temporary

  static userInfo: UserInfo;

  static async fetchUserInfo() {
    this.userInfo = await fetch(`${this.storageUrl}?inc=name,email,picture&results=1`)
      .then((response) => response.json())
      .then((data) => data.results[0]);
    return Promise.resolve();
  }

  static getUserInfo() {
    return this.userInfo;
  }

  static async getDevices() {
    return [];
  }
}
