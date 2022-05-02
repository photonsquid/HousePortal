export default class LoginFailureException extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, LoginFailureException.prototype);
  }
}
