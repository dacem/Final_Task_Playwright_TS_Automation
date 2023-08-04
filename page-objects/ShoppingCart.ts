import UIActions from '../helpers/UIActions';

export default class ShoppingCart {
    constructor(private web: UIActions) {}

    private readonly _SHOPPING_CART_BUTTON = 'div[id="shopping_cart_container"]';

    public async navigateToShoppingCart(){
    await this.web.element(this._SHOPPING_CART_BUTTON).click()
    await this.web.timeout(10);
    }

}