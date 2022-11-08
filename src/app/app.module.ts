import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from "./header/header.module";
import {MainPageModule} from "./main-page/main-page.module";
import {HttpClientModule} from "@angular/common/http";
import {ProductDescriptionModule} from "./product-description/product-description.module";
import { SharedModule } from './shared/shared.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    ProductDescriptionModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
