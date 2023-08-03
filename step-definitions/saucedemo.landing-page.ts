import { Given, When, Then } from '@cucumber/cucumber';
import LandingPage from '../page-objects/LandingPage';

Given(/^User has opened Swag Labs website$/, async function () {
  await new LandingPage(this.web).navigateToHomePage();
});

Given(/^User inputs username - "([^"]*)"$/, async function (username) {
  await new LandingPage(this.web).inputUsername(username);
});

Given(/^User inputs password - "([^"]*)"$/, async function (password) {
  await new LandingPage(this.web).inputPassword(password);
});

When(/^User press the “Login” button$/, async function () {
  await new LandingPage(this.web).pressLogin();
});
