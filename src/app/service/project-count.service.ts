import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjectCount} from "../dto/projectCount";

@Injectable({
  providedIn: 'root'
})
export class ProjectCountService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public projectCount(): Observable<any> {
    return this.http.get(this.baseUrl + "project-count/det");
  }

  public saveCount(p:ProjectCount): Observable<any> {
    return this.http.post(this.baseUrl + "project-count/save", {
      clients:p.clients,
      projects:p.projects,
      solutions:p.solutions
    });
  }

  public updateCount(p:ProjectCount,id:any): Observable<any> {
    return this.http.put(this.baseUrl + "project-count/update", {
      clients:p.clients,
      projects:p.projects,
      solutions:p.solutions
    },{headers:{id:id}});
  }
}
