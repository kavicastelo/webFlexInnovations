import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../dto/Users"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public updateUser(c:User,id:any): Observable<any> {
    return this.http.put(this.baseUrl + "user/update", {
      email:c.email,
      fullName:c.fullName,
      phone:c.phone,
      address:c.address
    },{headers:{id:id}});
  }

  public usersList(): Observable<any> {
    return this.http.get(this.baseUrl + "user/list");
  }

  public getUser(id:any): Observable<any> {
    return this.http.get(this.baseUrl + "customer/get",{
      headers:{
        id:id
      }
    });
  }

  public deleteUser(id:any): Observable<any> {
    return this.http.delete(this.baseUrl + "user/delete",{
      headers:{
        id:id
      }
    });
  }

  public usersIdsList(): Observable<any> {
    return this.http.get(this.baseUrl + "customer/id-list");
  }

}
