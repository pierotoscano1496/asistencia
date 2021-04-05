import { Observable } from "rxjs";
import ICliente from "src/app/models/interfaces/ICliente";
import { Resources } from "../Resources";

export default abstract class ClienteDBOperator {
    url: string = `${Resources.urlRest}clientes`;

    abstract all(): Observable<ICliente[]>;
    abstract findById(id: number): Observable<ICliente>;
    abstract allByCodigoStartsWith(codigo: string): Observable<ICliente[]>;
}