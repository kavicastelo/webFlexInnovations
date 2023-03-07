import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public sendMail(fullName: any, email: any, msg: any): Observable<any> {
    return this.http.post(this.baseUrl + "flexiart/contact", {
      fullName: fullName,
      email: email,
      msg: msg
    });
  }
}
