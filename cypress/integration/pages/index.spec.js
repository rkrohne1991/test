import user from '../../fixtures/user.json';

context('Actions', () => {
  describe('When you visit index page', () => {
    it('Get the user data and check usericon', () => {
      cy.visit('/en/US/');

      cy.fixture('user').then(userFixture => {
        expect(user).to.deep.equal(userFixture);
      });

      cy.findByTestId('usericon').as('icon');
      cy.get('@icon')
        .should('exist')
        .wait(2000)
        .then(() => {
          if (user) {
            cy.get('@icon').should('be.visible');
            // .and($img => {
            //   // "naturalWidth" and "naturalHeight" are set when the image loads
            //   expect($img[0].naturalWidth).to.be.greaterThan(0);
            // });
          }
        });
    });

    it('Check if nav is hiding showing on scroll', () => {
      cy.visit('/en/US/');
      // cy.wait(2000);
      // cy.findByTestId('menubar').should('exist');
      cy.window().scrollTo('bottom', { ensureScrollable: false });
      cy.wait(2000);
      cy.findByTestId('menubar').should('not.exist');
    });
  });
});
