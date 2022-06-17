// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react'

Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(<MyComponent />)