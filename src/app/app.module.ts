import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from "./header/header.module";
import {MainPageModule} from "./main-page/main-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        MainPageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
