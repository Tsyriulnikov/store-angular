import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from "./header/header.module";
import {MainPageModule} from "./main-page/main-page.module";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import {ProductDescriptionModule} from "./product-description/product-description.module";

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
