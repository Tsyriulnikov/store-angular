import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../cart/services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header-tools',
  templateUrl: './header-tools.component.html',
  styleUrls: ['./header-tools.component.scss']
})
export class HeaderToolsComponent implements OnInit {
  loginDisplayModal?: boolean
  registerDisplayModal?: boolean
  totalItemInCart: string = '0';

  constructor(private cartService: CartService) {
  }


  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItemInCart = res.length.toString();
      })
  }

  showModalDialogLogin() {
    this.loginDisplayModal = true;
  }

  showModalDialogRegister() {
    this.loginDisplayModal = false;
    this.registerDisplayModal = true;
  }
}
