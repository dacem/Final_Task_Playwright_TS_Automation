import { Given, When, Then } from '@cucumber/cucumber';
import CheckoutPage from '../page-objects/CheckoutPage';

When(/^User fills the checkout information form$/, async function () {
  await new CheckoutPage(this.web).fillingCheckoutInformation();
});

When(
  /^User press the “Continue” button to continue with the order$/,
  async function () {
    await new CheckoutPage(this.web).pressContinueButton();
  },
);

When(
  /^User sees correct product details in checkout overview$/,
  async function () {
    await new CheckoutPage(this.web).verifyCheckoutOverview();
  },
);

When(/^User press the “Finish” button$/, async function () {
  await new CheckoutPage(this.web).pressFinishButton();
});

Then(/^User sees that order has been completed$/, async function () {
  await new CheckoutPage(this.web).orderCompleted();
});

Then(/^User clicks on “Back Home” button$/, async function () {
  await new CheckoutPage(this.web).clickBackHomeButton();
});
