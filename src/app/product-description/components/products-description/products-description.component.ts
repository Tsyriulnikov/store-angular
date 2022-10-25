 import { Component, OnInit } from '@angular/core';
 import {ProductsDescriptionService} from "../../services/products-description.service";

@Component({
  selector: 'app-products-description',
  templateUrl: './products-description.component.html',
  styleUrls: ['./products-description.component.scss']
})
export class ProductsDescriptionComponent implements OnInit {

  constructor(private productsDescriptionService:ProductsDescriptionService) { }

  ngOnInit(): void {
    this.allProducts$=this.productsDescriptionService.singleProduct$
    this.productsDescriptionService.getProduct()
  }

}
