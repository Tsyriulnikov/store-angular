import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDescriptionComponent } from './components/products-description/products-description.component';
import {GalleriaModule} from "primeng/galleria";
import {CardModule} from "primeng/card";
import { ImageGallaryComponent } from './components/products-description/image-gallary/image-gallary.component';

@NgModule({
  declarations: [
    ProductsDescriptionComponent,
    ImageGallaryComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    CardModule,
      ]
})
export class ProductDescriptionModule { }
