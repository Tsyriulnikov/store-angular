import { Injectable } from '@angular/core';
import {GetProductsResponse} from "../../main-page/models/main-page.models";
import {environment} from "../../../environments/environment";
import {catchError, EMPTY} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {NotificationService} from "../../main-page/services/notification.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http:HttpClient,
              private notificationService: NotificationService) { }

  getCategories() {
    return this.http
      .get<GetProductsResponse[]>(`${environment.baseUrl}categories`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(err: HttpErrorResponse) {
    this.notificationService.handleError(err.message)
    return EMPTY
  }

}
