import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map} from "rxjs";
import {environment} from "../../../environments/environment";
import {GetProductsResponse} from "../models/main-page.models";

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  products$ = new BehaviorSubject<GetProductsResponse[]>([])

  constructor(private http: HttpClient) {
  }

  getProducts() {
    this.http
      .get<GetProductsResponse[]>(`${environment.baseUrl}products`)
      .subscribe((products: GetProductsResponse[]) => {
        this.products$.next(products)
      })
  }
}
