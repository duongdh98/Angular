import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs';
import { Roles } from '../helper/data.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiService = "http://localhost:3000";
  httpOption = {
  }

  constructor(
    private http: HttpClient
  ) { }

  /* --- Handle for roles ---*/

  getAllRoles() : Observable<Roles[]> {   // Get data roles

    return this.http.post<Roles[]>(this.apiService + '/roles/json/read', {})
    .pipe(
      map((data: any) => data.roles),
      catchError(this.errorHandle)
    )
  }

  createRole(role: Roles[]): Observable<Roles[]> {  // Create role

    console.log(role);
    return this.http.post<Roles[]>(this.apiService + '/roles/json/create', role)
      .pipe(
        catchError(this.errorHandle)
      )
  }

  deleteRole(id: string) {

    return this.http.delete<Roles[]>(this.apiService + '/roles/json/delete?id=' + id, {})
      .pipe(
        catchError(this.errorHandle)
      )
  }
  /* Error handle */
  errorHandle(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);

  }

}
