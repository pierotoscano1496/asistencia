import Cliente from "./Cliente";
import IReclamo from "./interfaces/IReclamo";
import Producto from "./Producto";

export default class Reclamo {
    private _id: number = 0;
    private _codigo: string;
    private _motivo: number;
    private _fecha: Date;
    private _descripcion: string;
    private _estado: number;
    private _fechaSolucion?: Date;
    private _descripcionSolucion?: string;
    private _idCliente: number;
    private _cliente?: Cliente;
    private _idProducto: number;
    private _producto?: Producto;

    constructor(reclamo: IReclamo) {
        if (reclamo.id != null) {
            this._id = reclamo.id;
        }
        this._codigo = reclamo.codigo;
        this._motivo = reclamo.motivo;
        this._fecha = reclamo.fecha instanceof Date ? reclamo.fecha : new Date(reclamo.fecha);
        this._descripcion = reclamo.descripcion;
        this._estado = reclamo.estado;
        this._fechaSolucion = reclamo.fechaSolucion instanceof Date ? reclamo.fechaSolucion : new Date(reclamo.fechaSolucion!);
        this._descripcionSolucion = reclamo.descripcionSolucion;
        this._idCliente = reclamo.idCliente;
        this._cliente = reclamo.cliente ? new Cliente(reclamo.cliente) : undefined;
        this._idProducto = reclamo.idProducto;
        this._producto = reclamo.producto ? new Producto(reclamo.producto) : undefined;
    }

    /**
     * Getter id
     * @return {number }
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter codigo
     * @return {string}
     */
    public get codigo(): string {
        return this._codigo;
    }

    /**
     * Getter motivo
     * @return {number}
     */
    public get motivo(): number {
        return this._motivo;
    }

    /**
     * Getter fecha
     * @return {Date}
     */
    public get fecha(): Date {
        return this._fecha;
    }

    /**
     * Getter descripcion
     * @return {string}
     */
    public get descripcion(): string {
        return this._descripcion;
    }

    /**
     * Getter estado
     * @return {number}
     */
    public get estado(): number {
        return this._estado;
    }

    /**
     * Getter fechaSolucion
     * @return {Date}
     */
    public get fechaSolucion(): Date {
        return this._fechaSolucion!;
    }

    /**
     * Getter descripcionSolucion
     * @return {string}
     */
    public get descripcionSolucion(): string {
        return this._descripcionSolucion!;
    }

    /**
     * Getter idCliente
     * @return {number}
     */
    public get idCliente(): number {
        return this._idCliente;
    }

    /**
     * Getter cliente
     * @return {Cliente}
     */
    public get cliente(): Cliente {
        return this._cliente!;
    }

    /**
     * Getter idProducto
     * @return {number}
     */
    public get idProducto(): number {
        return this._idProducto;
    }

    /**
     * Getter producto
     * @return {Producto}
     */
    public get producto(): Producto {
        return this._producto!;
    }

    /**
     * Setter id
     * @param {number } value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter codigo
     * @param {string} value
     */
    public set codigo(value: string) {
        this._codigo = value;
    }

    /**
     * Setter motivo
     * @param {number} value
     */
    public set motivo(value: number) {
        this._motivo = value;
    }

    /**
     * Setter fecha
     * @param {Date} value
     */
    public set fecha(value: Date) {
        this._fecha = value;
    }

    /**
     * Setter descripcion
     * @param {string} value
     */
    public set descripcion(value: string) {
        this._descripcion = value;
    }

    /**
     * Setter estado
     * @param {number} value
     */
    public set estado(value: number) {
        this._estado = value;
    }

    /**
     * Setter fechaSolucion
     * @param {Date} value
     */
    public set fechaSolucion(value: Date) {
        this._fechaSolucion = value;
    }

    /**
     * Setter descripcionSolucion
     * @param {string} value
     */
    public set descripcionSolucion(value: string) {
        this._descripcionSolucion = value;
    }

    /**
     * Setter idCliente
     * @param {number} value
     */
    public set idCliente(value: number) {
        this._idCliente = value;
    }

    /**
     * Setter cliente
     * @param {Cliente} value
     */
    public set cliente(value: Cliente) {
        this._cliente = value;
    }

    /**
     * Setter idProducto
     * @param {number} value
     */
    public set idProducto(value: number) {
        this._idProducto = value;
    }

    /**
     * Setter producto
     * @param {Producto} value
     */
    public set producto(value: Producto) {
        this._producto = value;
    }

    public parsedFecha(): string {
        const day = this._fecha.getDay();
        const month = this._fecha.getMonth();
        const year = this._fecha.getFullYear();
        return `${day >= 10 ? day : `0${day}`}/${month >= 10 ? month : `0${month}`}/${year}`;
    }

    public parsedFechaSolucion(): string {
        const day = this._fechaSolucion!.getDay();
        const month = this._fechaSolucion!.getMonth();
        const year = this._fechaSolucion!.getFullYear();
        return `${day >= 10 ? day : `0${day}`}/${month >= 10 ? month : `0${month}`}/${year}`;
    }

}