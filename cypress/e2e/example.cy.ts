// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url with english', () => {

    cy.visit('/', {onBeforeLoad(win) {
      Object.defineProperty(win.navigator, 'language', { value: 'en-UC' }) } });

    cy.get('.green').contains("h1", "Hello")
  })

  it('visits the app root url with korean', () => {

    cy.visit('/', {onBeforeLoad(win) {
      Object.defineProperty(win.navigator, 'language', { value: 'ko-KR' }) } });

    cy.get('.green').contains("h1", "안녕하세요");

    cy.get('.greetings > h3').contains("당신은 성공적으로 프로젝트를 생성하였습니다.")
  })
})
