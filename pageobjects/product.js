import { product } from "../cypress/fixtures/product.json";
class ProductDetailsPage {
  sizePicker = () => cy.get("#group_1");
  colorPicker = () => cy.get("#color_to_pick_list");
  addToCartBtn = () => cy.get("#add_to_cart");
  colorPanel = () => cy.get("li.selected>a");
  sizePanel = () => cy.get(".selector>span");

  selectSizeM() {
    this.sizePicker().select("2");
    this.sizePanel().should("contain", `${product.size}`);
  }
  selectColorBlue() {
    this.colorPicker().find("[name='Blue']").click();
    this.colorPanel().should("have.attr", "name", "Blue");
  }
  clickAddToCardBtn() {
    this.addToCartBtn().click();
  }
}
export default ProductDetailsPage;
