import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private httpservice:HttpClient) { }

  CreateUser<T>(apiurl:string,payload:T):Observable<T[]>{
   return  this.httpservice.post<T[]>(apiurl,payload)
  }
  GetUser<T>(apiurl:string):Observable<T>{
    return this.httpservice.get<T>(apiurl)
  }
  Delete(apiurl:string,id:number):Observable<any>{
    return this.httpservice.post(`${apiurl}?userId=${id}`,null)
  }
}
