import { Given, When, Then } from '@cucumber/cucumber';
import ProductsPage from '../page-objects/ProductsPage';
import ShoppingCart from '../page-objects/ShoppingCart';

When(/^User opens shopping cart$/, async function (){
    await new ShoppingCart(this.web).navigateToShoppingCart();
});