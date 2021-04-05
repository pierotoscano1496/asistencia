import { Observable } from "rxjs";
import IReclamo from "src/app/models/interfaces/IReclamo";
import { Resources } from "../Resources";

export abstract class ReclamoDBOperator {
    url: string = `${Resources.urlRest}reclamos`;

    abstract all(): Observable<IReclamo[]>;
    abstract findById(id: number): Observable<IReclamo>;
    abstract add(reclamo: IReclamo): Observable<IReclamo>;
    abstract update(id: number, reclamo: IReclamo): Observable<IReclamo>;
}