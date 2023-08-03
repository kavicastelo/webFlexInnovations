import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SendEmailsService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  sendTemplate(template: any): Observable<any> {
    return this.http.post(this.baseUrl+'sendMail/template', template);
  }

}
