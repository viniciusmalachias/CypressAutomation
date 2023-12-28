import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import loginUtils from "../../utils/loginUtils";

Given("I visit the SauceDemo website", () => {
  cy.visit("https://www.saucedemo.com/")
})

When("I log in with username {string}", (username) => {
  cy.get('[data-test="username"]').type(username);
})

When("insert my password {string}", (password) => {
  cy.get('[data-test="password"]').type(password);
})

When("click in the login button", () => {
  cy.get('[data-test="login-button"]').click();
})

Then('I should see the inventory page', () => {
  cy.url().should('include', '/inventory.html');
});

Then('I should see the error message', () => {
  cy.get('.error-message-container error').should('be.visible').and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
})
