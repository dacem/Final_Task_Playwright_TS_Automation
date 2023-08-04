import { Given, When, Then } from '@cucumber/cucumber';
import CheckoutSuccessPage from '../page-objects/CheckoutSuccessPage';

Then(/^User sees that order has been completed$/, async function () {
  await new CheckoutSuccessPage(this.web).orderCompleted();
});

Then(/^User clicks on “Back Home” button$/, async function () {
  await new CheckoutSuccessPage(this.web).clickBackHomeButton();
});
