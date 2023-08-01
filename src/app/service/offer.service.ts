import { Injectable } from '@angular/core';
import {Offer} from "../dto/offer";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getOffers(): Observable<any> {
    return this.http.get(this.baseUrl + "offers/get");
  }

  public updateOffer(o:Offer,id:any): Observable<any> {
    return this.http.put(this.baseUrl + "offers/update", {
      img:o.img,
      date:o.date
    },{headers:{id:id}});
  }
}
