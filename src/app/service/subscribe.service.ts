import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getNews(): Observable<any> {
    return this.http.get(this.baseUrl + "subscribe/get");
  }

  public subscribeNews(email: any): Observable<any> {
    return this.http.post(this.baseUrl + "subscribe/save", {
      email: email,
      subscribed: true
    });
  }
}
