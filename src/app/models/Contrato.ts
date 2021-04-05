import Cliente from "./Cliente";
import IContrato from "./interfaces/IContrato";
import Producto from "./Producto";

export default class Contrato {
    private _id: number = 0;
    private _numero!: string;
    private _fecha!: Date;
    private _descripcion!: string;
    private _idCliente!: number;
    private _cliente?: Cliente;
    private _idProducto!: number;
    private _producto?: Producto;

    constructor(contrato?: IContrato);

    constructor(contrato: IContrato) {
        if (contrato) {
            if (contrato.id != undefined) {
                this._id = contrato.id;
            }
            this._numero = contrato.numero;
            this._fecha = (contrato.fecha instanceof Date) ? contrato.fecha : new Date(contrato.fecha);
            this._descripcion = contrato.descripcion;
            this._idCliente = contrato.idCliente;
            this._cliente = contrato.cliente ? new Cliente(contrato.cliente) : undefined;
            this._idProducto = contrato.idProducto;
            this._producto = contrato.producto ? new Producto(contrato.producto) : undefined;
        }

    }

    /**
     * Getter id
     * @return {number }
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter numero
     * @return {string}
     */
    public get numero(): string {
        return this._numero;
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
     * Setter numero
     * @param {string} value
     */
    public set numero(value: string) {
        this._numero = value;
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

    /**
     * parsedFecha
     */
    public parsedFecha(): string {
        const day = this._fecha.getDay();
        const month = this._fecha.getMonth();
        const year = this._fecha.getFullYear();
        return `${day >= 10 ? day : `0${day}`}/${month >= 10 ? month : `0${month}`}/${year}`;
    }
}