import UIActions from '../helpers/UIActions';
import Assert from '../helpers/Assert';

export default class CheckoutOverviewPage {
  constructor(private web: UIActions) {}

  private readonly _CHECKOUT_OVERVIEW = 'div[id="checkout_summary_container"]';
  //private readonly _CHECKOUT_PRODUCT_NAME = 'div[class="inventory_item_name"]';
  //private readonly _CHECKOUT_PRODUCT_PRICE = 'div[class="inventory_item_price"]';
  private readonly _FINISH_BUTTON = 'button[id="finish"]';

  public async verifyCheckoutOverview(): Promise<void> {
    await this.web.element(this._CHECKOUT_OVERVIEW).waitTillVisible();
    // const actualProductName = await this.web
    //   .element(this._CHECKOUT_PRODUCT_NAME)
    //   .getFirstLocator()
    //   .textContent();
    // const actualProductPrice = await this.web
    //   .element(this._CHECKOUT_PRODUCT_PRICE)
    //   .getFirstLocator()
    //   .textContent();

    // await Assert.assertEquals(actualProductName, expectedProductName);
    // await Assert.assertEquals(actualProductPrice, expectedProductPrice);

    await this.web.timeout(10);
  }

  public async pressFinishButton(): Promise<void> {
    await this.web.element(this._FINISH_BUTTON).hover();
    await this.web.element(this._FINISH_BUTTON).click();
    await this.web.timeout(10);
  }
}
