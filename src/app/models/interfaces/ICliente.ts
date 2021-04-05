export default interface ICliente {
    id: number;
    documento: string;
    tipoDocumento: number;
    codigo: string;
    nombres: string;
    apellidos: string;
    fechaNacimiento: Date;
}