import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {LogoComponent} from './header/logo/logo.component';
import {SearchComponent} from './header/search/search.component';
import {HeaderToolsComponent} from './header/header-tools/header-tools.component';
import {CatalogComponent} from './header/catalog/catalog.component';
import {ThemeComponent} from './header/theme/theme.component';
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";


@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    HeaderToolsComponent,
    CatalogComponent,
    ThemeComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SplitButtonModule
  ]
})
export class HeaderModule {
}
