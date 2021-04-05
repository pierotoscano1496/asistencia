import ICliente from "./ICliente";
import IProducto from "./IProducto";

export default interface IReclamo {
    id?: number;
    codigo: string;
    motivo: number;
    fecha: Date;
    descripcion: string;
    estado: number;
    fechaSolucion?: Date;
    descripcionSolucion?: string;
    idCliente: number;
    cliente?: ICliente;
    idProducto: number;
    producto?: IProducto;
}