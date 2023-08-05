import UIActions from '../helpers/UIActions';

export default class ProductsPage {
  constructor(private web: UIActions) {}

  private readonly _PRODUCTS = 'span[class="title"]';
  private readonly _PRODUCT_LIST = 'div[class="inventory_list"]';
  private readonly _ADD_TO_CART_BUTTON = `button[data-test^="add-to-cart-%productName%"]`;

  private _SELECTED_PRODUCT: string;

  public async navigateToProductsPage(): Promise<void> {
    await this.web.element(this._PRODUCTS).waitTillVisible();
    await this.web.timeout(10);
  }

  public async addProductToCart(product: string): Promise<void> {
    await this.web.element(this._PRODUCT_LIST).waitTillVisible();

    const productNameFormatted = product.toLowerCase().split(' ').join('-');
    const addToCartButtonSelector = this._ADD_TO_CART_BUTTON.replace('%productName%', productNameFormatted);
    const addToCartButton = await this.web.element(addToCartButtonSelector);
    await addToCartButton.click();
    await this.web.timeout(10);
  }
}  
