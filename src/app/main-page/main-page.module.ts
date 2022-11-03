import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {MainPageComponent} from './components/main-page/main-page.component';
import {CardProductModule} from "../card-product/card-product.module";
import {CartModule} from "../cart/cart.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    CardProductModule,
    CartModule,
    Ng2SearchPipeModule
  ]
})
export class MainPageModule {
}
