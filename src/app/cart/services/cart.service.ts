import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GetProductsResponse} from "../../main-page/models/main-page.models";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: GetProductsResponse[] = []
  public productList = new BehaviorSubject<GetProductsResponse[]>([]);

  constructor() {
  }

  addtoCart(product: GetProductsResponse) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: GetProductsResponse) => {
      grandTotal += a.price;
    })
    return grandTotal;
  }
}
