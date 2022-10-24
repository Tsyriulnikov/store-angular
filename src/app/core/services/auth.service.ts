import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CommonResponse} from "../models/core.models";
import {LoginRequestData, RegisterRequestData} from "../models/auth.models";
import {Router} from "@angular/router";
import {ResultCodeEnum} from "../enums/resultCode.enum";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  login(data: Partial<LoginRequestData>) {
    this.http
      .post<CommonResponse<{ userId: number }>>(`${environment.baseUrl}/auth/login`, data)
      // .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(res => {
        if (res.resultCode === ResultCodeEnum.success) {
          // this.isAuth = true
          this.router.navigate(['/'])

        } else {
          // this.notificationService.handleError(res.messages[0])
          console.log(res.messages[0])
        }
      })
  }

  register(data: Partial<RegisterRequestData>) {
    this.http
      .post<CommonResponse<{ userId: number }>>(`${environment.baseUrl}/users`, data)
      // .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(res => {
        if (res.resultCode === ResultCodeEnum.success) {
          // this.isAuth = true
          this.router.navigate(['/'])

        } else {
          // this.notificationService.handleError(res.messages[0])
          console.log(res.messages[0])
        }
      })
  }
}
