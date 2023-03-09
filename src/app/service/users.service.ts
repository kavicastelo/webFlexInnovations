import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../dto/Users"
import {Pass} from "../dto/Users"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public updateUser(u:User,id:any): Observable<any> {
    return this.http.put(this.baseUrl + "user/updateUser", {
      email:u.email,
      fullName:u.fullName,
      phone:u.phone,
      address:u.address
    },{headers:{id:id}});
  }

  public updatePwd(p:Pass,email:any): Observable<any> {
    return this.http.put(this.baseUrl + "user/updatePwd", {
      password:p.password
    },{headers:{email:email}});
  }

  public usersList(): Observable<any> {
    return this.http.get(this.baseUrl + "user/list");
  }

  public getUser(email:any): Observable<any> {
    return this.http.get(this.baseUrl + "user/getUser",{
      headers:{
        email:email
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
