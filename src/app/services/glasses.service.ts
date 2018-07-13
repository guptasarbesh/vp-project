import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlassesService {
  // rootUrl: any = 'http://localhost:3000';
  // header: any;

  constructor(private _http: HttpClient) { 
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

}
