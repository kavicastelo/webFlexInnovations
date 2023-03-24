import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public sendFeedback(fullName: any, msg: any, date: any): Observable<any> {
    return this.http.post(this.baseUrl + "feedback/save-feedback", {
      fullName: fullName,
      msg: msg,
      date: date
    });
  }

  public feedbacksList(): Observable<any> {
    return this.http.get(this.baseUrl + "feedback/feedbacks");
  }

  public deleteFeedback(id:any): Observable<any> {
    return this.http.delete(this.baseUrl + "feedback/delete",{
      headers:{
        id:id
      }
    });
  }
}
