import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/components/main-page/main-page.component";
import {
  ProductsDescriptionComponent
} from "./product-description/components/products-description/products-description.component";
import {CartComponent} from "./cart/components/cart/cart.component";


const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: MainPageComponent},
  {path: 'products/:id', component: ProductsDescriptionComponent},
  {path: 'cart', component: CartComponent},
  // {path: '404', component: PageNotFoundComponent},
  // {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
