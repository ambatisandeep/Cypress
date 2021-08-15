describe('Todays Deals', () => {
  it('Page Test', () => {
    cy.visit('https://www.amazon.in/',{failOnStatusCode: false})
    cy.get('#twotabsearchtextbox').type('Todays Deals')
    cy.get('#nav-search-submit-button').click()
    cy.wait(3000)
    cy.url().should('include','Todays+Deals').and
    cy.get('.sg-row-align-items-center.sg-row a').within(()=>{
      cy.contains('Shop now').click()
    })
    cy.title().should('eq',"Amazon.in - Today's Deals")
    cy.get('[href="https://www.amazon.in/deal/dca249fa?showVariations=true&ref=deals_deals_deals-shoveler_slot-12_029f_dt_dcell_img_1_dca249fa"] > .a-row > .a-image-container > img').click()
    cy.title().should('eq','Handpicked Laptops | Upto INR 30000 Off')
    cy.get(':nth-child(3) > .a-list-item > .octopus-dlp-asin-section > .a-spacing-base > .a-link-normal > .a-section').click()
  })
})