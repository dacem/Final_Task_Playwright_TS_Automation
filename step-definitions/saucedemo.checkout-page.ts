import { Given, When, Then } from '@cucumber/cucumber';
import CheckoutPage from '../page-objects/CheckoutPage';

When(/^User fills the checkout information form$/, async function () {
  await new CheckoutPage(this.web).fillingCheckoutInformation();
});
