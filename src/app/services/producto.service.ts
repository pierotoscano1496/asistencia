import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import IProducto from '../models/interfaces/IProducto';
import ProductoDBOperator from './db-operators/ProductoDBOperator';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends ProductoDBOperator {

  constructor(private http: HttpClient) {
    super();
  }

  all(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this.url).pipe(
      catchError(error => this.handleError(error))
    );
  }

  findById(id: number): Observable<IProducto> {
    return this.http.get<IProducto>(`${this.url}/${id}`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  allByCodigoStartsWith(codigo: string): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(`${this.url}?codigo=^${codigo}`).pipe(
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
