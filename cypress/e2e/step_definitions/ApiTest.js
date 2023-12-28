import { Given } from "@badeball/cypress-cucumber-preprocessor";

// Archive: ApiTest.js
describe('API Test', () => {
    Given('Find objects with the property', () => {
      // call API
      cy.request('https://api.publicapis.org/entries')
        .then((response) => {
          //Verify status code of requisition
          expect(response.status).to.eq(200);
            
          // Filter The following objects "Category: Authentication & Authorization"
          const authCategoryObjects = response.body.entries.filter((entry) => {
            return entry.Category === 'Authentication & Authorization';
          });
  
          // Verify and print the counter of objects founds
          const numberOfAuthCategoryObjects = authCategoryObjects.length;
          cy.log(`Número de objetos com a propriedade "Category: Authentication & Authorization": ${numberOfAuthCategoryObjects}`);
  
          // Verify if the counter is bigger than 0
          expect(numberOfAuthCategoryObjects).to.be.greaterThan(0);
  
          // Print the found objects of console
          cy.log('Objetos encontrados:');
          authCategoryObjects.forEach((obj) => {
            cy.log(JSON.stringify(obj));
          });
        });
    });
  });
  