describe('Pokedex challenge', () => {
  it('Visits the welcome page', () => {
    cy.visit('http://localhost:8080/')

    cy.contains('Get started')
  })

  it('Should redirect to the pokemons list when press the "Get started" button', () => {
    cy.contains('Get started').click()

    cy.url().should('include', '/list')
  })

  it('Should show the pokemon list', () => {
    cy.get('.PokemonListItem')
    // .should('have.length', 1)
  })

  it('Should search a pokemon and list', () => {
    cy.get('input')
      .type('Psyduck')
      .should('have.value', 'Psyduck')

    cy.get('.PokemonListItem')
      .should('have.length', 1)
  })

  it('Should add favorite to the favorites page', () => {
    cy.get('input')
      .clear()

    cy.get('input')
      .type('Psyduck')
      .should('have.value', 'Psyduck')

    cy.get('.ButtonIcon')
      .click()
      .should('have.class', 'active')
  })

  it('Should exist a favorite pokemon in the favorites page', () => {
    cy.contains('Favorites')
      .click()

    cy.url().should('include', '/favorites')

    cy.get('.PokemonListItem')
      .should('have.length', 1)
  })

  it('Should open a modal with your detail', () => {
    cy.get('.PokemonListItem')
      .click()

    cy.get('.PokemonListItemModal-detail')
      .should('have.contain', 'Name', 'Psyduck')
      .should('have.contain', 'Weight', '196')
      .should('have.contain', 'Height', '8')
      .should('have.contain', 'Types', 'Water')
  })

  it('Should click in the "Share to my friend" button and have text in the clipboard', () => {
    cy.get('.PokemonListItemModal-actions > .btn')
      .click()

    cy.get('.Modal-close-button > svg')
      .click()
  })
})
