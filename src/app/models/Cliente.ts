import ICliente from "./interfaces/ICliente";

export default class Cliente {
    private _id: number = 0;
    private _documento: string;
    private _tipoDocumento: number;
    private _codigo: string;
    private _nombres: string;
    private _apellidos: string;
    private _fechaNacimiento: Date;

    constructor(cliente: ICliente) {
        if (cliente.id != null) {
            this._id = cliente.id;
        }
        this._documento = cliente.documento;
        this._tipoDocumento = cliente.tipoDocumento;
        this._codigo = cliente.codigo;
        this._nombres = cliente.nombres;
        this._apellidos = cliente.apellidos;
        this._fechaNacimiento = cliente.fechaNacimiento;
    }

    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter documento
     * @return {string}
     */
    public get documento(): string {
        return this._documento;
    }

    /**
     * Getter tipoDocumento
     * @return {number}
     */
    public get tipoDocumento(): number {
        return this._tipoDocumento;
    }

    /**
     * Getter codigo
     * @return {string}
     */
    public get codigo(): string {
        return this._codigo;
    }

    /**
     * Getter nombres
     * @return {string}
     */
    public get nombres(): string {
        return this._nombres;
    }

    /**
     * Getter apellidos
     * @return {string}
     */
    public get apellidos(): string {
        return this._apellidos;
    }

    /**
     * Getter fechaNacimiento
     * @return {Date}
     */
    public get fechaNacimiento(): Date {
        return this._fechaNacimiento;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter documento
     * @param {string} value
     */
    public set documento(value: string) {
        this._documento = value;
    }

    /**
     * Setter tipoDocumento
     * @param {number} value
     */
    public set tipoDocumento(value: number) {
        this._tipoDocumento = value;
    }

    /**
     * Setter codigo
     * @param {string} value
     */
    public set codigo(value: string) {
        this._codigo = value;
    }

    /**
     * Setter nombres
     * @param {string} value
     */
    public set nombres(value: string) {
        this._nombres = value;
    }

    /**
     * Setter apellidos
     * @param {string} value
     */
    public set apellidos(value: string) {
        this._apellidos = value;
    }

    /**
     * Setter fechaNacimiento
     * @param {Date} value
     */
    public set fechaNacimiento(value: Date) {
        this._fechaNacimiento = value;
    }

}