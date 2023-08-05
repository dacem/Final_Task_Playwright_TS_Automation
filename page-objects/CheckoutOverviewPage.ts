import UIActions from '../helpers/UIActions';
import Assert from '../helpers/Assert';
import UIElementActions from '../helpers/UIElementActions';

export default class CheckoutOverviewPage {
  constructor(private web: UIActions) {}

  private readonly _CHECKOUT_OVERVIEW = 'div[id="checkout_summary_container"]';
  private readonly _CHECKOUT_PRODUCT_NAME = 'a[id="item_5_title_link"]';
  private readonly _FINISH_BUTTON = 'button[id="finish"]';

  public async verifyCheckoutOverview(expectedProductName: string): Promise<boolean> {
    await this.web.element(this._CHECKOUT_OVERVIEW).waitTillVisible();
      const checkoutProductNameLocator = await this.web.element(this._CHECKOUT_PRODUCT_NAME);
    this.web.locator = checkoutProductNameLocator;
    const actualProductName = await this.web.textContent();
    const isCorrectProduct = actualProductName === expectedProductName;
    return isCorrectProduct;
  }


  public async pressFinishButton(): Promise<void> {
    await this.web.element(this._FINISH_BUTTON).hover();
    await this.web.element(this._FINISH_BUTTON).click();
    await this.web.timeout(10);
  }
}
