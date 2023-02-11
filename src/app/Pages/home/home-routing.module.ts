import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products/products.component";



const routes: Routes = [
  {
    path: 'products-list',
    component: ProductsComponent,
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class HomeRoutingModule {
}
