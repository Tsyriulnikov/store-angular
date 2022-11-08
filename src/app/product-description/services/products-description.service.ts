import {Injectable} from '@angular/core';
import {GetProductsResponse} from "../../main-page/models/main-page.models";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsDescriptionService {

  constructor(private http: HttpClient) {}

  getSingleProduct(idProduct: number) {
    return this.http
      .get<GetProductsResponse>(`${environment.baseUrl}products/${idProduct}`)
  }

}
