import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  import loginUtils from "../../utils/loginUtils";

  When('I Verify of the items are sorted correctly A-Z', () => {
    cy.get('[data-test="product_sort_container"]')
        .invoke('text')
        .then((textBeforeSort) => {
          const itemNamesBeforeSort = textBeforeSort.split('\n').filter(Boolean);
          const sortedOrder = [...itemNamesBeforeSort].sort();
          expect(itemNamesBeforeSort).to.deep.equal(sortedOrder);
        });
        // appling the Wait function to you can see the changes.
    cy.wait(2000)
    })

   Then('I verify of items are sorted correctly Z-A', () => {
    cy.get('[data-test="product_sort_container"]').select('za');
    cy.get('.inventory_item_name')
        .invoke('text')
        .then((textAfterSort) => {
          const itemNamesAfterSort = textAfterSort.split('\n').filter(Boolean);
          const reversedOrder = [...itemNamesAfterSort].sort().reverse();
          expect(itemNamesAfterSort).to.deep.equal(reversedOrder);
        });

   })