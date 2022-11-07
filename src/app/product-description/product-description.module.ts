import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDescriptionComponent } from './components/products-description/products-description.component';
import {GalleriaModule} from "primeng/galleria";
import {CardModule} from "primeng/card";
import { ImageGallaryComponent } from './components/products-description/image-gallary/image-gallary.component';
import {SwiperModule} from "swiper/angular";
import {ButtonModule} from "primeng/button";
import {ImageModule} from "primeng/image";



@NgModule({
  declarations: [
    ProductsDescriptionComponent,
    ImageGallaryComponent
  ],
    imports: [
        CommonModule,
        GalleriaModule,
        CardModule,
        SwiperModule,
        ButtonModule,
        ImageModule,
    ]
})
export class ProductDescriptionModule { }
