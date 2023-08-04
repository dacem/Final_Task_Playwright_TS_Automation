import UIActions from '../helpers/UIActions';

export default class CheckoutPage {
  constructor(private web: UIActions) {}

  private readonly _FIRST_NAME = 'input[id="first-name"]';
  private readonly _LAST_NAME = 'input[id="last-name"]';
  private readonly _POSTAL_CODE = 'input[id="postal-code"]';

  public async fillingCheckoutInformation(): Promise<void> {
    await this.web.element(this._FIRST_NAME).click;
    await this.web.element(this._FIRST_NAME).sendKeys('Dace');
    await this.web.element(this._LAST_NAME).click;
    await this.web.element(this._LAST_NAME).sendKeys('Mušperte');
    await this.web.element(this._POSTAL_CODE).click;
    await this.web.element(this._POSTAL_CODE).sendKeys('LV4202');
    await this.web.timeout(10);
  }
}
