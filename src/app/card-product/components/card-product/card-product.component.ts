import {Component, Input, OnInit} from '@angular/core';
import {GetProductsResponse} from "../../../main-page/models/main-page.models";
import {CartService} from "../../../cart/services/cart.service";


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() prod!: GetProductsResponse

  constructor(private cartService:CartService) {

  }

  ngOnInit(): void {
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
