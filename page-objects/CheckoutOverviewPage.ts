import UIActions from '../helpers/UIActions';
import Assert from '../helpers/Assert';

export default class CheckoutOverviewPage {
  constructor(private web: UIActions) {}

  private readonly _CHECKOUT_OVERVIEW = 'div[id="checkout_summary_container"]';
  private readonly _CHECKOUT_PRODUCT_NAME = 'a[id="item_5_title_link"]';
  // private readonly _CHECKOUT_PRODUCT_PRICE =
  //   'div[class="inventory_item_price"]';
  private readonly _FINISH_BUTTON = 'button[id="finish"]';

  public async verifyCheckoutOverview(): Promise<void> {
    await this.web.element(this._CHECKOUT_OVERVIEW).waitTillVisible();
    await this.web.element(this._CHECKOUT_PRODUCT_NAME).waitTillVisible();
    // if true - console.log message?

    // const actualCheckoutProductName = await this.web
    //   .element(this._CHECKOUT_PRODUCT_NAME)
    //   .getFirstLocator()
    //   .textContent();
    // const actualCheckoutProductPrice = await this.web
    //   .element(this._CHECKOUT_PRODUCT_PRICE)
    //   .getFirstLocator()
    //   .textContent();

    // await Assert.assertEquals(actualCheckoutProductName, expectedProductName);
    // await Assert.assertEquals(actualCheckoutProductPrice, expectedProductPrice);

    await this.web.timeout(10);
  }

  public async pressFinishButton(): Promise<void> {
    await this.web.element(this._FINISH_BUTTON).hover();
    await this.web.element(this._FINISH_BUTTON).click();
    await this.web.timeout(10);
  }
}
