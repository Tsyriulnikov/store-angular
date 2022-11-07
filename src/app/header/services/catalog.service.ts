import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {catchError, EMPTY} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {NotificationService} from "../../main-page/services/notification.service";
import {GetCategoriesResponse} from "../models/catalog.models";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http:HttpClient,
              private notificationService: NotificationService) { }


  getCategories() {
    return this.http
      .get<GetCategoriesResponse[]>(`${environment.baseUrl}categories`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }



  private errorHandler(err: HttpErrorResponse) {
    this.notificationService.handleError(err.message)
    return EMPTY
  }

}
