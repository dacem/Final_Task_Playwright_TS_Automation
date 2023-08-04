import { Given, When, Then } from '@cucumber/cucumber';
import ProductsPage from '../page-objects/ProductsPage';

Then(/^User is on Swag Labs products page$/, async function () {
  await new ProductsPage(this.web).navigateToProductsPage();
});

When(
  /^User adds - "Sauce Labs Fleece Jacket" to the shopping cart$/,
  async function () {
    await new ProductsPage(this.web).addProductToCart();
  },
);
