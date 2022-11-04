import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, EMPTY} from "rxjs";
import {environment} from "../../../environments/environment";
import {GetProductsResponse} from "../models/main-page.models";
import {NotificationService} from "./notification.service";

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  error$ = new BehaviorSubject<any>('')
  search = new BehaviorSubject<string>("");
  searchKey: string = "";

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService) {}

  getProducts() {
    return this.http
      .get<GetProductsResponse[]>(`${environment.baseUrl}products`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(err: HttpErrorResponse) {
    this.notificationService.handleError(err.message)
    return EMPTY
  }
}
