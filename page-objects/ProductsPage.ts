import UIActions from '../helpers/UIActions';

export default class ProductsPage {
  constructor(private web: UIActions) {}

  private readonly _PRODUCTS = 'span[class="title"]';
  private readonly _ADD_TO_CART_BUTTON =
    'button[id="add-to-cart-sauce-labs-fleece-jacket"]';

	public async navigateToProductsPage(): Promise<void> {
    await this.web.element(this._PRODUCTS).waitTillVisible();
    await this.web.timeout(10);
  }

  public async addProductToCart(): Promise<void> {
    const item_selection = await this.web
    	.element(this._ADD_TO_CART_BUTTON)
    	.waitTillVisible();

		await this.web.element(this._ADD_TO_CART_BUTTON).click();
		await this.web.timeout(10);

	}

}
