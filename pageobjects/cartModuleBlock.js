import { product } from "../cypress/fixtures/product.json";

class CartModule {
  proceedToCheckoutBtn = () => cy.contains("span", "Proceed to checkout");

  clickProceedToCheckout() {
    this.proceedToCheckoutBtn().click();
    cy.url().should("include", "controller=order");
    cy.get("#order_step>.step_current.first").should("be.visible");
  }

  verifyProductDetails() {
    cy.get(".clearfix>.layer_cart_product", { timeout: 9000 })
      .should("be.visible")
      .and("contain.text", "Product successfully added to your shopping cart")
      .and("contain.text", `${product.name}`)
      .and("contain.text", `${product.size}`)
      .and("contain.text", `${product.color}`);
  }

  verifyProductPrice() {
    cy.get(".ajax_block_products_total").then(($totalProductPrice) => {
      const totalProductPrice = $totalProductPrice.text().slice(1);
      cy.get(".ajax_cart_shipping_cost")
        .first()
        .then(($shippingPrice) => {
          const shippingPrice = $shippingPrice.text().slice(1);
          cy.get(".ajax_block_cart_total")
            .first()
            .then(($totalCartPrice) => {
              let totalCartPrice = $totalCartPrice.text().slice(1);
              expect(
                Number(totalProductPrice) + Number(shippingPrice)
              ).to.equal(Number(totalCartPrice));
            });
        });
    });
  }
}
export default CartModule;
