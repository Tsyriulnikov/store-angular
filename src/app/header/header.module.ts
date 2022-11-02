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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import { LoginComponent } from './header/header-tools/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import { RegisterUserComponent } from './header/header-tools/register-user/register-user.component';
import {BadgeModule} from "primeng/badge";



@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    HeaderToolsComponent,
    CatalogComponent,
    ThemeComponent,
    LoginComponent,
    RegisterUserComponent
  ],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
        SplitButtonModule,
        BrowserAnimationsModule,
        InputTextModule,
        RippleModule,
        DialogModule,
        ReactiveFormsModule,
        PasswordModule,
        BadgeModule,
        FormsModule
    ]
})
export class HeaderModule {
}
