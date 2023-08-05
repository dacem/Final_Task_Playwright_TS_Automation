import { When, Then } from '@cucumber/cucumber';
import ShoppingCart from '../page-objects/ShoppingCart';

When(/^User opens shopping cart$/, async function () {
  await new ShoppingCart(this.web).navigateToShoppingCart();
});

Then(
  /^User sees product - "([^"]*)" with price - "([^"]*)"$/,
  async function (expectedProductName: string, expectedProductPrice: string) {
    await new ShoppingCart(this.web).validateAddedProductToShoppingCart(
      expectedProductName,
      expectedProductPrice,
    );
  },
);

When(/^User press “Checkout” button$/, async function () {
  await new ShoppingCart(this.web).pressCheckoutButton();
  await this.web.timeout(10);
});
