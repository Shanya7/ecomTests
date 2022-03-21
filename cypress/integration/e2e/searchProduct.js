/// <reference types="cypress" />

describe("Search products", () => {
  beforeEach(() => {
    cy.visit("");
  });
  it("search product using searc field", () => {
    cy.get("#search_query_top").click().type("dress{enter}");

    cy.get(".page-heading").should("include.text", "dress");
    cy.url().should("include", "query=dress");

    cy.get(".product_list.grid.row>li")
      .first()
      .then(($firstElement) => {
        const productNamePLP = $firstElement.find(".product-name").text();
        const productPricePLP = $firstElement
          .find("[itemprop='price']")
          .first()
          .text();
        cy.log(productPricePLP);
        //open PDP of first product
        cy.get(".product_list.grid.row>li").first().contains("More").click();
        //check if the description and price are the same
        cy.get("[itemprop='name']").then(($productNamePDP) => {
          expect($productNamePDP.text()).equal(productNamePLP.trim());
        });
        cy.get("#our_price_display").then(($productPricePDP) => {
          expect($productPricePDP.text()).equal(productPricePLP.trim());
        });
      });
      //change  size to M and check that it is M
      cy.get("#group_1").select("2");
      cy.get(".selector>span").should("contain", "M")
      //Change color to Blue and check that it is blue
      cy.get("#color_to_pick_list").find("[name='Blue']").click()
      cy.get("li.selected>a").should("have.attr", "name", "Blue")

  });
});
