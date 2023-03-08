import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public login(email: any, password: any): Observable<any> {
    return this.http.post(this.baseUrl + "user/login", {
      email: email,
      password: password
    });
  }
}
