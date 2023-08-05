import UIActions from '../helpers/UIActions';

export default class CheckoutPage {
  constructor(private web: UIActions) {}

  private readonly _ORDER_COMPLETED = 'div[id="checkout_complete_container"]';
  private readonly _BACK_HOME_BUTTON = 'button[id="back-to-products"]';

  public async orderCompleted(): Promise<void> {
    await this.web.element(this._ORDER_COMPLETED).waitTillVisible();
  }

  public async clickBackHomeButton(): Promise<void> {
    await this.web.element(this._BACK_HOME_BUTTON).click();
    await this.web.timeout(10);
  }
}
