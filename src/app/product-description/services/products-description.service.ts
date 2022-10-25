import {Injectable} from '@angular/core';
import {GetProductsResponse} from "../../main-page/models/main-page.models";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsDescriptionService {
  singleProduct$ = new BehaviorSubject<GetProductsResponse[]>([])

  constructor(private http: HttpClient) {
  }

  getSingleProduct(idProduct: number) {
    this.http
      .get<GetProductsResponse[]>(`${environment.baseUrl}products/${idProduct}`)
      .subscribe((product: GetProductsResponse[]) => {
        this.singleProduct$.next(product)
      })
  }

}
