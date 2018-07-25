import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GlassesService {
  // rootUrl: any = 'http://localhost:3000';
  // header: any;

  constructor(private http: Http) { 
    // this.header = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });
  }

  // signupUser(data): Observable<any>{
  //   return this._http.post(this.rootUrl + '/user', data, this.header).pipe(
  //     map((res: HttpResponse<any>)=> res),
  //     catchError((err: HttpErrorResponse)=> throwError(err))
  //   )
  // }
  getProduct(id)
  {
  
    return this.http.get("http://localhost:3000/products/Sunglass/"+id).pipe(map(res => res.json()));
  }
  getProducts()
  {
    return this.http.get("http://localhost:3000/products/allProduct").pipe(map(res=>res.json()));
  }
  getItem(id)
  {
      return this.http.get("http://localhost:3000/products/getItem/"+id).pipe(map(res=>res.json()));
    
  }

}
