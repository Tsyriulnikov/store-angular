import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDescriptionComponent } from './components/products-description/products-description.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    ProductsDescriptionComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ]
})
export class ProductDescriptionModule { }
