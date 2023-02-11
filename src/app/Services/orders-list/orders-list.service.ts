import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Products} from "../../Models/Interfaces/products";

@Injectable({
  providedIn: 'root'
})
export class OrdersListService {
products: Products[] = [];
  constructor() { }
  getProducts(): void {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res=>res.json())
      .then(json=>this.products = json)
  }
}
