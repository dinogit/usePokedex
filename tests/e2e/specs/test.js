// https://docs.cypress.io/api/introduction/api.html

describe('Pokedex exists', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('.pokedex');
  });
});
