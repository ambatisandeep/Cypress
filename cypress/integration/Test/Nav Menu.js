describe('Amazon Menu', () => {
  it('Nav Bar Test', () => {
    cy.visit('https://www.amazon.in/',{failOnStatusCode: false})
    cy.get('.hm-icon.nav-sprite').click()
    cy.contains('Mobiles, Computers').trigger('mouseover')
    cy.contains('All Mobile Phones').click()
    cy.wait(5000)
    cy.url().should('include','all_mobiles')

  })
})