import {Component, EventEmitter, Output} from "@angular/core";
import {ProductModel} from "../product/product.model";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent {

  products: ProductModel[] | undefined;
  private currentProd: ProductModel | undefined;
  @Output() onProductSelected: EventEmitter<ProductModel>;

  constructor() {
    this.products = [new ProductModel("NICEHAT",
      "A Nice Black Hat",
      "/resources/images/products/black-hat.jpg",
      ["Men", "Accessories", "Hats"],
      29.99
    ), new ProductModel("NEATOJACKET",
      "Blue Jacket",
      "/assets/images/products/blue-jacket.jpg",
      ["Women", "Apparel", "Jackets & Vests"],
      238.99),
      new ProductModel("MYSHOES",
        "Black Running Shoes",
        "/assets/images/products/black-shoes.jpg",
        ["Men", "Shoes", "Running Shoes"],
        109.99)
    ];
    this.onProductSelected = new EventEmitter();
  }


  clicked(product: ProductModel) {
    this.currentProd = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: ProductModel) {
    if (!product || !this.currentProd) {
      return false;
    }
    return product.sku === this.currentProd.sku;
  }
}
