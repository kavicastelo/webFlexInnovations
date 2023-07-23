import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gallery} from "../dto/gallery";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getImages(): Observable<any> {
    return this.http.get(this.baseUrl + "gallery/get");
  }

  public saveImage(g:Gallery): Observable<any> {
    return this.http.post(this.baseUrl + "gallery/save", {
      src:g.src,
      thumb:g.thumb,
      caption:g.caption
    });
  }

  public deleteImage(id:any): Observable<any> {
    return this.http.delete(this.baseUrl + "gallery/delete",{
      headers:{
        id:id
      }
    });
  }
}
