import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/components/main-page/main-page.component";
import {
  ProductsDescriptionComponent
} from "./product-description/components/products-description/products-description.component";
// import {LoginComponent} from "./auth/components/login/login.component";

const routes: Routes = [
  {path: '',component:MainPageComponent},
  {path: 'product',component:ProductsDescriptionComponent}
  // {path: 'profile', component: ProfileComponent},
  // {path: 'todos', component: TodosComponent},
  // {path: 'users', component: UsersComponent},
  // {path: '404', component: PageNotFoundComponent},
  // {path: '**', redirectTo: '/404'}

// {
    // path: 'login', component:LoginComponent
    // loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
