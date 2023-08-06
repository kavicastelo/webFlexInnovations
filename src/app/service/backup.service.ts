import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public requestBackup(options: any): Observable<any> {
    return this.http.post(this.baseUrl + "backup/get", {}, options);
  }

  public downloadBackup() {
    const link = document.createElement('a');
    link.href = this.baseUrl + 'backup/download'; // Modify this route if needed
    link.target = '_blank';
    link.download = 'Flexiart_DB.zip'; // Specify the downloaded file name
    link.click();
  }
}
