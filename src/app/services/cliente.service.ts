import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import ICliente from '../models/interfaces/ICliente';
import ClienteDBOperator from './db-operators/ClienteDBOperator';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends ClienteDBOperator {

  constructor(private http: HttpClient) {
    super();
  }

  all(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(this.url).pipe(
      catchError(error => this.handleError(error))
    );
  }

  findById(id: number): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.url}/${id}`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  allByCodigoStartsWith(codigo: string): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(`${this.url}?codigo=^${codigo}`).pipe(
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
