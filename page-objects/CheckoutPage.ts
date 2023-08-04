import UIActions from '../helpers/UIActions';
import Assert from '../helpers/Assert';
//import ShoppingCart from './ShoppingCart';

export default class CheckoutPage {
  constructor(private web: UIActions) {}

  private readonly _FIRST_NAME = 'input[id="first-name"]';
  private readonly _LAST_NAME = 'input[id="last-name"]';
  private readonly _POSTAL_CODE = 'input[id="postal-code"]';
  private readonly _CONTINUE_BUTTON = 'input[id="continue"]';
  private readonly _CHECKOUT_OVERVIEW = 'div[id="checkout_summary_container"]';
  //private readonly _CHECKOUT_PRODUCT_NAME = 'div[class="inventory_item_name"]';
  //private readonly _CHECKOUT_PRODUCT_PRICE = 'div[class="inventory_item_price"]';
  private readonly _FINISH_BUTTON = 'button[id="finish"]';
  private readonly _ORDER_COMPLETED = 'div[id="checkout_complete_container"]';
  private readonly _BACK_HOME_BUTTON = 'button[id="back-to-products"]';

  public async fillingCheckoutInformation(): Promise<void> {
    await this.web.element(this._FIRST_NAME).click;
    await this.web.element(this._FIRST_NAME).sendKeys('Dace');
    await this.web.element(this._LAST_NAME).click;
    await this.web.element(this._LAST_NAME).sendKeys('Mušperte');
    await this.web.element(this._POSTAL_CODE).click;
    await this.web.element(this._POSTAL_CODE).sendKeys('LV4202');
  }

  public async pressContinueButton(): Promise<void> {
    await this.web.element(this._CONTINUE_BUTTON).click();
    await this.web.timeout(10);
  }

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

  public async orderCompleted(): Promise<void> {
    await this.web.element(this._ORDER_COMPLETED).waitTillVisible();
    await this.web.timeout(10);
  }

  public async clickBackHomeButton(): Promise<void> {
    await this.web.element(this._BACK_HOME_BUTTON).click();
    await this.web.timeout(10);
  }
}
