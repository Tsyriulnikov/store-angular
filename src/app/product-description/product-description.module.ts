import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDescriptionComponent } from './components/products-description/products-description.component';
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    ProductsDescriptionComponent
  ],
  imports: [
    CommonModule,
    CardModule,
  ]
})
export class ProductDescriptionModule { }
