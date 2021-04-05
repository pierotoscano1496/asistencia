import ICliente from "./ICliente";
import IProducto from "./IProducto";

export default interface IContrato {
    id?: number;
    numero: string;
    fecha: Date;
    descripcion: string;
    idCliente: number;
    cliente?: ICliente;
    idProducto: number;
    producto?: IProducto;
}