import { Given, When, Then } from '@cucumber/cucumber';
import LandingPage from '../page-objects/LandingPage';

Given(/^User has opened Swag Labs website$/, async function () {
  await new LandingPage(this.web).navigateToHomePage();
});

//Given User inputs username - "standard_user"

//Given User inputs password - "secret_sauce"

//When User press the “Login” button