import UIActions from '../helpers/UIActions';

export default class ProductsPage {
  constructor(private web: UIActions) {}

  private readonly _PRODUCTS = 'span[class="title"]';
  private readonly _PRODUCT_LIST = 'div[class="inventory_list"]';
  private readonly _ADD_TO_CART_BUTTON =
    'button[id="add-to-cart-sauce-labs-fleece-jacket"]';

  private _SELECTED_PRODUCT: string;

  public async navigateToProductsPage(): Promise<void> {
    await this.web.element(this._PRODUCTS).waitTillVisible();
    await this.web.timeout(10);
  }

  public async addProductToCart(product: string): Promise<void> {
    await this.web.element(this._PRODUCT_LIST).waitTillVisible();
    const selected_product = await this.web.element(this._PRODUCT_LIST).getByAltText(product);
    const item_selection = await this.web
      .element(this._ADD_TO_CART_BUTTON)
      .waitTillVisible();
    await this.web.element(this._ADD_TO_CART_BUTTON).click();
    await this.web.timeout(10);
  }
}  
