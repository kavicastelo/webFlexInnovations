import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TextMessage} from "../dto/text-message";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    })
  };

  sendMessage(textMessage: TextMessage){
    var reqBody = {
      "projectId": environment.dialogflow.projectId,
      "requestText": textMessage.text
    }
    return this.http.post(environment.baseUrl+'requestText', reqBody, this.httpOptions);
  }

}
