import { Observable } from "rxjs";
import IContrato from "src/app/models/interfaces/IContrato";
import { Resources } from "../Resources";

export default abstract class ContratoDBOperator {
    url: string = `${Resources.urlRest}contratos`;

    abstract all(): Observable<Array<IContrato>>;
    abstract findById(id: number): Observable<IContrato>;
    abstract findByCliente(idCliente: number): Observable<Array<IContrato>>;
    abstract add(contrato: IContrato): Observable<IContrato>;
    abstract update(contrato: IContrato): Observable<IContrato>;
}