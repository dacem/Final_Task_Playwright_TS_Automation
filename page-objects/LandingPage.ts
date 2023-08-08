import UIActions from '../helpers/UIActions';

export default class LandingPage {
  constructor(private web: UIActions) {}

  private readonly _USERNAME = 'input[id="user-name"]';
  private readonly _PASSWORD = 'input[id="password"]';
  private readonly _LOGIN_BUTTON = 'input[id="login-button"]';

  public async navigateToHomePage(): Promise<void> {
    await this.web.goto('https://www.saucedemo.com/');
  }

  public async inputUsername(username: string): Promise<void> {
    await this.web.element(this._USERNAME).click;
    await this.web.element(this._USERNAME).fill(username);
    await this.web.timeout(10);
  }

  public async inputPassword(password: string): Promise<void> {
    await this.web.element(this._PASSWORD).click;
    await this.web.element(this._PASSWORD).fill(password);
    await this.web.timeout(10);
  }

  public async pressLogin(): Promise<void> {
    await this.web.element(this._LOGIN_BUTTON).click();
  }
}
