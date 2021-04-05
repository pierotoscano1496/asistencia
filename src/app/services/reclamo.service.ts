import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import IReclamo from '../models/interfaces/IReclamo';
import { ReclamoDBOperator } from './db-operators/ReclamoDBOperator';

@Injectable({
  providedIn: 'root'
})
export class ReclamoService extends ReclamoDBOperator {

  constructor(private http: HttpClient) {
    super();
  }

  all(): Observable<IReclamo[]> {
    return this.http.get<IReclamo[]>(this.url).pipe(
      catchError(error => this.handleError(error))
    );
  }

  findById(id: number): Observable<IReclamo> {
    return this.http.get<IReclamo>(`${this.url}/${id}`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  add(reclamo: IReclamo): Observable<IReclamo> {
    return this.http.post<IReclamo>(this.url, reclamo).pipe(
      catchError(error => this.handleError(error))
    );
  }

  update(id: number, reclamo: IReclamo): Observable<IReclamo> {
    return this.http.put<IReclamo>(`${this.url}/${id}`, reclamo).pipe(
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("Ocurrió un error. ", error.error.message);
    } else {
      console.error(`Código de error: ${error.status}`);
    }
    return throwError("Por favor, revisar el error.");
  }
}
