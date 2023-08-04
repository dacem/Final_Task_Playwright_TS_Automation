import UIActions from '../helpers/UIActions';
import Assert from '../helpers/Assert';

export default class ShoppingCart {
  constructor(private web: UIActions) {}

  private readonly _SHOPPING_CART_BUTTON = 'div[id="shopping_cart_container"]';
  private readonly _CART_PRODUCT_NAME = 'div[class="inventory_item_name"]';
  private readonly _CART_PRODUCT_PRICE = 'div[class="inventory_item_price"]';

  public async navigateToShoppingCart() {
    await this.web.element(this._SHOPPING_CART_BUTTON).click();
    await this.web.timeout(10);
  }

  public async validateAddedProductToShoppingCart(
    expectedProductName,
    expectedProductPrice,
  ): Promise<void> {
    const actualProductName = await this.web
      .element(this._CART_PRODUCT_NAME)
      .getFirstLocator()
      .textContent();
    const actualProductPrice = await this.web
      .element(this._CART_PRODUCT_PRICE)
      .getFirstLocator()
      .textContent();

    await Assert.assertEquals(actualProductName, expectedProductName);
    await Assert.assertEquals(actualProductPrice, expectedProductPrice);
  }
}
