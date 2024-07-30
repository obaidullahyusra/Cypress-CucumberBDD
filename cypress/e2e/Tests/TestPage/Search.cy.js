/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import searchPage from "../../Pages/SearchPage.cy";

Given("I am on the documents page", () => {
    searchPage.navigateToDocs();
});

When("I search {string}", (keyword) => {
    searchPage.searchKeyWord(keyword);
});

Then("I should see {string} is displayed in result", (keyword) => {
    searchPage.verifyResult(keyword);
      
});