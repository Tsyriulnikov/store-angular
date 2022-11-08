import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDescriptionComponent } from './components/products-description/products-description.component';
import {GalleriaModule} from "primeng/galleria";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {ImageModule} from "primeng/image";

@NgModule({
  declarations: [
    ProductsDescriptionComponent,
   ],
  imports: [
    CommonModule,
    GalleriaModule,
    CardModule,
    ButtonModule,
    ImageModule,
   ]
})
export class ProductDescriptionModule { }
