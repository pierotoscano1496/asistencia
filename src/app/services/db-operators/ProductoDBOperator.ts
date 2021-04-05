import { Observable } from "rxjs";
import IProducto from "src/app/models/interfaces/IProducto";
import { Resources } from "../Resources";

export default abstract class ProductoDBOperator {
    url: string = `${Resources.urlRest}productos`;

    abstract all(): Observable<IProducto[]>;
    abstract findById(id: number): Observable<IProducto>;
    abstract allByCodigoStartsWith(codigo: string): Observable<IProducto[]>;
}