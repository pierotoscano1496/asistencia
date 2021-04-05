import IProducto from "./interfaces/IProducto";

export default class Producto {
    private _id: number = 0;
    private _codigo: string;
    private _nombre: string;
    private _tecnologia: string;

    constructor(producto: IProducto) {
        if (producto.id != null) {
            this._id = producto.id;
        }
        this._codigo = producto.codigo;
        this._nombre = producto.nombre;
        this._tecnologia = producto.tecnologia;
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
     * Getter nombre
     * @return {string}
     */
    public get nombre(): string {
        return this._nombre;
    }

    /**
     * Getter tecnologia
     * @return {string}
     */
    public get tecnologia(): string {
        return this._tecnologia;
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
     * Setter nombre
     * @param {string} value
     */
    public set nombre(value: string) {
        this._nombre = value;
    }

    /**
     * Setter tecnologia
     * @param {string} value
     */
    public set tecnologia(value: string) {
        this._tecnologia = value;
    }

}