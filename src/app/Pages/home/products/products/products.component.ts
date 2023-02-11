import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Products} from "../../../../Models/Interfaces/products";
import {OrdersListService} from "../../../../Services/orders-list/orders-list.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(public productsService: OrdersListService) {
  }
ngOnInit(): void {
this.getProducts();
}
getProducts(): void {
     this.productsService.getProducts();
}
}
