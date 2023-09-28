import {Component, EventEmitter, HostBinding, Input, Output} from "@angular/core";
import {ProductModel} from "./product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent {
  @HostBinding("class.row") cssClass = "row";
  @Input() productCh: ProductModel | undefined;


}
