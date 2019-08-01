describe('Main E2E', () => {
  it('should input `testing cypress`', () => {
    cy.visit('localhost:3000');

    const inputMessage = 'testing cypress';
    const buttonMessage = 'Click here';

    cy.get('input').type(inputMessage);
    cy.get('p').should('have.text', inputMessage);
    cy.get('[type="submit"]').should('have.text', buttonMessage);
  });
});
