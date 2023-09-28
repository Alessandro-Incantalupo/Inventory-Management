import {Component} from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent {

  onProductSelected(product: any) {
    console.log("Product clicked: ", product);
  }
}
