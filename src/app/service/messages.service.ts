import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public messagesList(): Observable<any> {
    return this.http.get(this.baseUrl + "flexiart/messages");
  }
}
