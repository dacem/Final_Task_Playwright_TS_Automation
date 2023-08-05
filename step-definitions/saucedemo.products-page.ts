import { Given, When, Then } from '@cucumber/cucumber';
import ProductsPage from '../page-objects/ProductsPage';

Then(/^User is on Swag Labs products page$/, async function () {
  await new ProductsPage(this.web).navigateToProductsPage();
});

When(/^User adds - "([^"]*)" to the shopping cart$/, async function (product) {
  await new ProductsPage(this.web).addProductToCart(product);
});
