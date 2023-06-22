import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdservService {

 constructor(private _http:HttpClient){}

 getAlltheproducts():Observable<any>{
    return this._http.get<any>("http://localhost:9999/getProd");
 }
   
}
