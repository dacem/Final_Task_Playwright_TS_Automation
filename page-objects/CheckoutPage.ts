import UIActions from '../helpers/UIActions';

export default class CheckoutPage {
  constructor(private web: UIActions) {}

  private readonly _FIRST_NAME = 'input[id="first-name"]';
  private readonly _LAST_NAME = 'input[id="last-name"]';
  private readonly _POSTAL_CODE = 'input[id="postal-code"]';
  private readonly _CONTINUE_BUTTON = 'input[id="continue"]';

  public async fillingCheckoutInformation(): Promise<void> {
    await this.web.element(this._FIRST_NAME).click;
    await this.web.element(this._FIRST_NAME).fill('Dace');
    await this.web.element(this._LAST_NAME).click;
    await this.web.element(this._LAST_NAME).fill('Mušperte');
    await this.web.element(this._POSTAL_CODE).click;
    await this.web.element(this._POSTAL_CODE).fill('LV4202');
  }

  public async pressContinueButton(): Promise<void> {
    await this.web.element(this._CONTINUE_BUTTON).click();
    await this.web.timeout(10);
  }
}
