export enum ContentType {
  PASSWORD = 'Password',
  EMAIL = 'Email',
  USERNAME = 'Username',
  FIRST_NAME = 'First Name',
  LAST_NAME = 'Last Name',
  PHONE = 'Phone',
  ADDRESS = 'Address',
  CITY = 'City',
  STATE = 'State',
  ZIP = 'Zip',
  COUNTRY = 'Country',
}

export default class SpellCheck {
  static regexDict = {
    [ContentType.PASSWORD]: /^(.){6,32}$/,
    [ContentType.EMAIL]: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    [ContentType.USERNAME]: /^[a-zA-Z0-9_]{3,15}$/,
    [ContentType.FIRST_NAME]: /^[a-zA-Z]{2,15}$/,
    [ContentType.LAST_NAME]: /^[a-zA-Z]{2,15}$/,
    [ContentType.PHONE]: /^[0-9]{10}$/,
    [ContentType.ADDRESS]: /^[a-zA-Z0-9\s,.'-]{2,50}$/,
    [ContentType.CITY]: /^[a-zA-Z]{2,15}$/,
    [ContentType.STATE]: /^[a-zA-Z]{2,15}$/,
    [ContentType.ZIP]: /^[0-9]{5}$/,
    [ContentType.COUNTRY]: /^[a-zA-Z]{2,15}$/,
  };

  static check(text: string, category: ContentType): boolean {
    if (this.regexDict[category].test(text)) {
      return true;
    }
    return false;
  }
}
