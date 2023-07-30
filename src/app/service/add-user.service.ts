import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public addUser(email: any, password:any, fullName: any, phone: any, address:any): Observable<any> {
    return this.http.post(this.baseUrl + "user/register", {
      email: email,
      password: password,
      fullName: fullName,
      phone:phone,
      address:address,
      verified: false
    });
  }
}
