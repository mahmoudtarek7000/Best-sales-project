import {Component, Input} from '@angular/core';
import {Products} from "../../Models/Interfaces/products";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Products;
  @Input() productIndex!: number;
 allHeaderColors: { [key: number]: string } = {
   0: '#FF8B64',
   1: '#55C2E6',
   2: '#FF5E7D',
   3: '#4BCF82',
   4: '#7335D2',
   5: '#F1C75B'
 }
 getHeaderColor(i: number): string {
   let backGroundColor: string;
   switch (i) {
     case  0 || 3:
       backGroundColor = this.allHeaderColors[0];
       break;
     case 1 || 4:
       backGroundColor = this.allHeaderColors[1];
       break;
     case 2:
       backGroundColor = this.allHeaderColors[2];
       break;
     case 5 || 8:
       backGroundColor = this.allHeaderColors[3];
       break;
     case 6 || 9:
       backGroundColor = this.allHeaderColors[4];
       break;
     default:
       backGroundColor = this.allHeaderColors[5];
   }
   return 'background-color: ' + backGroundColor;
 }
}
