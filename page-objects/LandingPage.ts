import UIActions from '../helpers/UIActions';

export default class LandingPage {
  constructor(private web: UIActions) {}

  private readonly _USERNAME = 'input[id="user-name"]';

  public async navigateToHomePage(): Promise<void> {
    await this.web.goto('https://www.saucedemo.com/');
  }

  public async inputUsername(username: string): Promise<any> {
    await this.web.element(this._USERNAME).click;
    await this.web.element(this._USERNAME).sendKeys("standard_user");
    await this.web.timeout(10);
  }
}
