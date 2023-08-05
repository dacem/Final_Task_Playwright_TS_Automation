import { Given, When, Then } from '@cucumber/cucumber';
import CheckoutOverviewPage from '../page-objects/CheckoutOverviewPage';

When(
  /^User sees correct product details in checkout overview$/,
  async function () {
    const expectedProductName = 'Sauce Labs Fleece Jacket';
    const isCorrectProduct = await new CheckoutOverviewPage(this.web).verifyCheckoutOverview(expectedProductName);
  },
);

When(/^User press the “Finish” button$/, async function () {
  await new CheckoutOverviewPage(this.web).pressFinishButton();
});
