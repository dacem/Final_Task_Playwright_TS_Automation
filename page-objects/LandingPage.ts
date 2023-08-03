import UIActions from '../helpers/UIActions';

export default class LandingPage{
  constructor(private web: UIActions) {}

  public async navigateToHomePage(): Promise<void> {
    await this.web.goto('https://www.saucedemo.com/');
  }


}