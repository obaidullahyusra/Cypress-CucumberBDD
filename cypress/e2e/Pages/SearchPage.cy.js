class SearchPage{

    navigateToDocs() {
     cy.visit("https://docs.cypress.io/");
    

   }

   searchKeyWord(keyword){
        cy.get(".searchBox_H2mL").click();
        cy.get('[id="docsearch-input"]').type(keyword);
        
        
       
   }

   verifyResult(keyword){
       cy.get('.DocSearch-Dropdown').contains(keyword);
      
   }
}

const searchPage = new SearchPage();
export default searchPage;