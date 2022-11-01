import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Observable} from "rxjs";
import {GetProductsResponse} from "../../../main-page/models/main-page.models";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$?: Observable<GetProductsResponse[]>
  public products : GetProductsResponse[] = [];
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    // this.cartItems$ = this.cartService.productList
    this.cartService.getProducts()
      .subscribe(res=>{
        this.products = res;
        // this.grandTotal = this.cartService.getTotalPrice();
      })
  }

}
