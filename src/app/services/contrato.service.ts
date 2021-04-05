import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import IContrato from '../models/interfaces/IContrato';
import ContratoDBOperator from './db-operators/ContratoDBOperator';

@Injectable({
  providedIn: 'root'
})
export class ContratoService extends ContratoDBOperator {

  constructor(private http: HttpClient) {
    super();
  }

  all(): Observable<IContrato[]> {
    return this.http.get<IContrato[]>(this.url).pipe(
      catchError(error => this.handleError(error))
    );
  }

  findById(id: number): Observable<IContrato> {
    return this.http.get<IContrato>(`${this.url}/${id}`).pipe(
      catchError(error => this.handleError(error))
    )
  }

  findByCliente(idCliente: number): Observable<IContrato[]> {
    throw new Error('Method not implemented.');
  }

  add(contrato: IContrato): Observable<IContrato> {
    return this.http.post<IContrato>(this.url, contrato).pipe(
      catchError(error => {
        return this.handleError(error);
      })
    );
  }

  update(contrato: IContrato): Observable<IContrato> {
    throw new Error('Method not implemented.');
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
