class Search {
  searchFld = () => cy.get("#search_query_top");
  pageHeading = () => cy.get(".page-heading");
  productList = () => cy.get(".product_list.grid.row>li");

  doSearch(value) {
    this.searchFld()
      .click()
      .type(value + "{enter}");
    this.pageHeading().should("include.text", value);
    cy.url().should("include", "query=" + value);
  }
  navigateToPdpFirstItem() {
    this.productList()
      .first()
      .then(($firstElement) => {
        const productNamePLP = $firstElement.find(".product-name").text();
        const productPricePLP = $firstElement
          .find("[itemprop='price']")
          .first()
          .text();
        //open PDP of first product
        this.productList()
          .first()
          .trigger("mouseover")
          .contains("More")
          .click();
        //check if the description and price are the same
        cy.get("[itemprop='name']").then(($productNamePDP) => {
          expect($productNamePDP.text()).equal(productNamePLP.trim());
        });
        cy.get("#our_price_display").then(($productPricePDP) => {
          expect($productPricePDP.text()).equal(productPricePLP.trim());
        });
        cy.writeFile("/cypress/fixtures/prod.json", productNamePLP);
      });
  }
}
export default Search;
