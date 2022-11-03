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
  search = new BehaviorSubject<string>("");
  searchKey: string = "";

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http
      .get<GetProductsResponse[]>(`${environment.baseUrl}products`)
  }
}
