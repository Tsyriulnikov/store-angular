import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsDescriptionService} from "../../services/products-description.service";
import {Observable, Subscription} from "rxjs";
import {GetProductsResponse} from "../../../main-page/models/main-page.models";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-products-description',
  templateUrl: './products-description.component.html',
  styleUrls: ['./products-description.component.scss']
})
export class ProductsDescriptionComponent implements OnInit {
  singleProduct$?: Observable<GetProductsResponse>
  cartItems$?: Observable<GetProductsResponse[]>
  constructor(
    private productsDescriptionService: ProductsDescriptionService,
    private route: ActivatedRoute,
    private cartService:CartService
  ) {
  }

  ngOnInit(): void {
    this.singleProduct$=this.productsDescriptionService.singleProduct$
    const id = +this.route.snapshot.paramMap.get('id')!

    this.productsDescriptionService.getSingleProduct(id)
    this.cartItems$ = this.cartService.productList
  }
  addToCart(item: GetProductsResponse) {
    this.cartService.addtoCart(item);
  }

}
