/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import searchPage from "../../Pages/SearchPage/SearchPage.cy";

Given("I am on the documents page", () => {
    searchPage.navigateToDocs();
    //cy.visit("https://docs.cypress.io/");
});

When("I search {string}", (keyword) => {
    searchPage.searchKeyWord(keyword);
    //cy.get(".searchBox_H2mL").click();
    
    //cy.get('[id="docsearch-input"]').type(keyword);
});

Then("I should see {string} is displayed in result", (keyword) => {
    searchPage.verifyResult(keyword);
    //cy.get('.DocSearch-Dropdown').contains(keyword);
      
});