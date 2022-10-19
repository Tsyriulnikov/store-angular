import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardProductComponent} from "./components/card-product/card-product.component";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";




@NgModule({
  declarations: [
    CardProductComponent
  ],
  exports: [
    CardProductComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DataViewModule,
    DropdownModule
  ]
})
export class CardProductModule { }
