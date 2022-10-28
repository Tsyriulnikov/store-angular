import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsDescriptionService} from "../../services/products-description.service";
import {Observable, Subscription} from "rxjs";
import {GetProductsResponse} from "../../../main-page/models/main-page.models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-description',
  templateUrl: './products-description.component.html',
  styleUrls: ['./products-description.component.scss']
})
export class ProductsDescriptionComponent implements OnInit, OnDestroy {
  // singleProduct$!: GetProductsResponse
  subscription!: Subscription
  singleProduct$?: Observable<GetProductsResponse>

  constructor(
    private productsDescriptionService: ProductsDescriptionService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.singleProduct$=this.productsDescriptionService.singleProduct$
    const id = +this.route.snapshot.paramMap.get('id')!
    // this.subscription = this.productsDescriptionService.getSingleProduct(id)
    //   .subscribe(prod => this.singleProduct$ = prod);
    this.productsDescriptionService.getSingleProduct(id)
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe()
  }
}
