context('Actions', () => {
  beforeEach(() => {
    cy.visit('/en/US');
  });

  describe('When you visit product page', () => {
    it('Should find all products', () => {
      cy.visit('/en/US/product');
      cy.findAllByTestId('product-element').should('exist');
    });
  });
});
