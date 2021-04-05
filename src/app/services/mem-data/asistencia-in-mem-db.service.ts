import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import ICliente from 'src/app/models/interfaces/ICliente';
import IContrato from 'src/app/models/interfaces/IContrato';
import IProducto from 'src/app/models/interfaces/IProducto';
import IReclamo from 'src/app/models/interfaces/IReclamo';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaInMemDbService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    let clientes: ICliente[] = [
      {
        id: 1,
        documento: "36235693",
        tipoDocumento: 3,
        codigo: "4436235693",
        nombres: "Roy",
        apellidos: "Sandell",
        fechaNacimiento: new Date(1975, 11, 7)
      }, {
        id: 2,
        documento: "18439361",
        tipoDocumento: 1,
        codigo: "318439361",
        nombres: "Davida",
        apellidos: "Soule",
        fechaNacimiento: new Date(23, 2, 3)
      }, {
        id: 3,
        documento: "3576867",
        tipoDocumento: 2,
        codigo: "33576867",
        nombres: "Patricia",
        apellidos: "Senn",
        fechaNacimiento: new Date(1998, 9, 11)
      }, {
        id: 4,
        documento: "33612831",
        tipoDocumento: 3,
        codigo: "8233612831",
        nombres: "Arlena",
        apellidos: "Rea",
        fechaNacimiento: new Date(1987, 1, 4)
      }, {
        id: 5,
        documento: "9534457",
        tipoDocumento: 3,
        codigo: "189534457",
        nombres: "Chaddy",
        apellidos: "Bygreaves",
        fechaNacimiento: new Date(1975, 11, 1)
      }, {
        id: 6,
        documento: "1853767",
        tipoDocumento: 3,
        codigo: "91853767",
        nombres: "Milly",
        apellidos: "Bows",
        fechaNacimiento: new Date(1978, 5, 12)
      }, {
        id: 7,
        documento: "14576215",
        tipoDocumento: 2,
        codigo: "4414576215",
        nombres: "Hesther",
        apellidos: "Walsham",
        fechaNacimiento: new Date(1976, 3, 17)
      }, {
        id: 8,
        documento: "3217867",
        tipoDocumento: 1,
        codigo: "813217867",
        nombres: "Wright",
        apellidos: "Erricker",
        fechaNacimiento: new Date(1995, 12, 4)
      }, {
        id: 9,
        documento: "9528821",
        tipoDocumento: 1,
        codigo: "669528821",
        nombres: "Eberto",
        apellidos: "Coverdale",
        fechaNacimiento: new Date(1983, 5, 23)
      }, {
        id: 10,
        documento: "24835655",
        tipoDocumento: 2,
        codigo: "7624835655",
        nombres: "Anissa",
        apellidos: "Brockington",
        fechaNacimiento: new Date(23, 6, 27)
      }, {
        id: 11,
        documento: "1848115",
        tipoDocumento: 2,
        codigo: "261848115",
        nombres: "Lianna",
        apellidos: "Wither",
        fechaNacimiento: new Date(1994, 6, 4)
      }, {
        id: 12,
        documento: "38896849",
        tipoDocumento: 1,
        codigo: "5638896849",
        nombres: "Vladimir",
        apellidos: "De La Cote",
        fechaNacimiento: new Date(1971, 7, 7)
      }, {
        id: 13,
        documento: "8866885",
        tipoDocumento: 2,
        codigo: "718866885",
        nombres: "Raimundo",
        apellidos: "Sincock",
        fechaNacimiento: new Date(22, 6, 5)
      }, {
        id: 14,
        documento: "92761218",
        tipoDocumento: 2,
        codigo: "9892761218",
        nombres: "Kesley",
        apellidos: "Mellows",
        fechaNacimiento: new Date(1986, 12, 23)
      }, {
        id: 15,
        documento: "72828197",
        tipoDocumento: 2,
        codigo: "6172828197",
        nombres: "Lezley",
        apellidos: "Adamides",
        fechaNacimiento: new Date(1972, 1, 11)
      }, {
        id: 16,
        documento: "66764",
        tipoDocumento: 1,
        codigo: "2566764",
        nombres: "Arda",
        apellidos: "Snasdell",
        fechaNacimiento: new Date(1988, 12, 2)
      }, {
        id: 17,
        documento: "4633472",
        tipoDocumento: 3,
        codigo: "434633472",
        nombres: "Oralia",
        apellidos: "Craske",
        fechaNacimiento: new Date(1986, 12, 22)
      }, {
        id: 18,
        documento: "78647262",
        tipoDocumento: 1,
        codigo: "878647262",
        nombres: "Timofei",
        apellidos: "Cabell",
        fechaNacimiento: new Date(1997, 1, 19)
      }, {
        id: 19,
        documento: "4328517",
        tipoDocumento: 3,
        codigo: "974328517",
        nombres: "Amy",
        apellidos: "Alexander",
        fechaNacimiento: new Date(22, 7, 15)
      }, {
        id: 20,
        documento: "91771337",
        tipoDocumento: 2,
        codigo: "591771337",
        nombres: "Augustus",
        apellidos: "Grigs",
        fechaNacimiento: new Date(23, 6, 23)
      }, {
        id: 21,
        documento: "2298717",
        tipoDocumento: 1,
        codigo: "172298717",
        nombres: "Roley",
        apellidos: "McGaw",
        fechaNacimiento: new Date(1996, 6, 1)
      }, {
        id: 22,
        documento: "1414848",
        tipoDocumento: 1,
        codigo: "721414848",
        nombres: "Dion",
        apellidos: "O'Dyvoy",
        fechaNacimiento: new Date(1997, 7, 11)
      }, {
        id: 23,
        documento: "12875982",
        tipoDocumento: 2,
        codigo: "412875982",
        nombres: "Avery",
        apellidos: "Jurn",
        fechaNacimiento: new Date(1989, 3, 28)
      }, {
        id: 24,
        documento: "22834578",
        tipoDocumento: 1,
        codigo: "5922834578",
        nombres: "Annissa",
        apellidos: "Wharram",
        fechaNacimiento: new Date(1997, 3, 1)
      }, {
        id: 25,
        documento: "5838365",
        tipoDocumento: 2,
        codigo: "155838365",
        nombres: "Sybyl",
        apellidos: "Cossentine",
        fechaNacimiento: new Date(197, 9, 1)
      }, {
        id: 26,
        documento: "4723168",
        tipoDocumento: 3,
        codigo: "274723168",
        nombres: "Dotti",
        apellidos: "Hazelgrove",
        fechaNacimiento: new Date(1994, 8, 8)
      }, {
        id: 27,
        documento: "52287836",
        tipoDocumento: 1,
        codigo: "9752287836",
        nombres: "Beatrisa",
        apellidos: "Danahar",
        fechaNacimiento: new Date(1999, 9, 13)
      }, {
        id: 28,
        documento: "5117258",
        tipoDocumento: 3,
        codigo: "595117258",
        nombres: "Leanor",
        apellidos: "Garaway",
        fechaNacimiento: new Date(1983, 1, 25)
      }, {
        id: 29,
        documento: "27413293",
        tipoDocumento: 3,
        codigo: "5627413293",
        nombres: "Clarie",
        apellidos: "Strathearn",
        fechaNacimiento: new Date(198, 9, 12)
      }, {
        id: 30,
        documento: "191775",
        tipoDocumento: 3,
        codigo: "31191775",
        nombres: "Yehudi",
        apellidos: "de Marco",
        fechaNacimiento: new Date(21, 12, 6)
      }, {
        id: 31,
        documento: "36845388",
        tipoDocumento: 2,
        codigo: "236845388",
        nombres: "Kassi",
        apellidos: "Goffe",
        fechaNacimiento: new Date(1983, 9, 26)
      }, {
        id: 32,
        documento: "21626325",
        tipoDocumento: 2,
        codigo: "6721626325",
        nombres: "Marcia",
        apellidos: "Dobbs",
        fechaNacimiento: new Date(198, 6, 2)
      }, {
        id: 33,
        documento: "29362159",
        tipoDocumento: 3,
        codigo: "929362159",
        nombres: "Corenda",
        apellidos: "McCaughran",
        fechaNacimiento: new Date(1976, 3, 18)
      }, {
        id: 34,
        documento: "42443558",
        tipoDocumento: 3,
        codigo: "842443558",
        nombres: "Humfrid",
        apellidos: "Sodo",
        fechaNacimiento: new Date(199, 11, 13)
      }, {
        id: 35,
        documento: "9514584",
        tipoDocumento: 3,
        codigo: "359514584",
        nombres: "Natasha",
        apellidos: "Dumbrall",
        fechaNacimiento: new Date(1977, 8, 19)
      }, {
        id: 36,
        documento: "536377",
        tipoDocumento: 2,
        codigo: "6536377",
        nombres: "Daisy",
        apellidos: "Millom",
        fechaNacimiento: new Date(1973, 8, 19)
      }, {
        id: 37,
        documento: "51998464",
        tipoDocumento: 3,
        codigo: "6951998464",
        nombres: "Norris",
        apellidos: "Conan",
        fechaNacimiento: new Date(1988, 3, 2)
      }, {
        id: 38,
        documento: "3851462",
        tipoDocumento: 1,
        codigo: "83851462",
        nombres: "Georgetta",
        apellidos: "Lowdes",
        fechaNacimiento: new Date(1974, 2, 4)
      }, {
        id: 39,
        documento: "2947",
        tipoDocumento: 1,
        codigo: "12947",
        nombres: "Raquela",
        apellidos: "Cuming",
        fechaNacimiento: new Date(1991, 7, 28)
      }, {
        id: 40,
        documento: "94954845",
        tipoDocumento: 1,
        codigo: "2794954845",
        nombres: "Reed",
        apellidos: "Hanning",
        fechaNacimiento: new Date(199, 3, 29)
      }, {
        id: 41,
        documento: "65927358",
        tipoDocumento: 1,
        codigo: "5965927358",
        nombres: "Elvera",
        apellidos: "Norker",
        fechaNacimiento: new Date(1982, 4, 19)
      }, {
        id: 42,
        documento: "33892794",
        tipoDocumento: 2,
        codigo: "2833892794",
        nombres: "Bobby",
        apellidos: "Raysdale",
        fechaNacimiento: new Date(1971, 6, 2)
      }, {
        id: 43,
        documento: "433635",
        tipoDocumento: 3,
        codigo: "28433635",
        nombres: "Baxy",
        apellidos: "Mullis",
        fechaNacimiento: new Date(1971, 7, 13)
      }, {
        id: 44,
        documento: "974926",
        tipoDocumento: 3,
        codigo: "51974926",
        nombres: "Barty",
        apellidos: "Clute",
        fechaNacimiento: new Date(1971, 1, 21)
      }, {
        id: 45,
        documento: "6263768",
        tipoDocumento: 2,
        codigo: "976263768",
        nombres: "Jeramey",
        apellidos: "Bryers",
        fechaNacimiento: new Date(1976, 7, 24)
      }, {
        id: 46,
        documento: "75731124",
        tipoDocumento: 2,
        codigo: "175731124",
        nombres: "Audra",
        apellidos: "Foley",
        fechaNacimiento: new Date(1992, 3, 2)
      }, {
        id: 47,
        documento: "6615416",
        tipoDocumento: 1,
        codigo: "116615416",
        nombres: "Marrissa",
        apellidos: "Fretson",
        fechaNacimiento: new Date(1975, 4, 1)
      }, {
        id: 48,
        documento: "127957",
        tipoDocumento: 3,
        codigo: "13127957",
        nombres: "Renee",
        apellidos: "Brando",
        fechaNacimiento: new Date(1983, 12, 6)
      }, {
        id: 49,
        documento: "44691942",
        tipoDocumento: 3,
        codigo: "7744691942",
        nombres: "Kirk",
        apellidos: "Woodham",
        fechaNacimiento: new Date(2, 1, 9)
      }, {
        id: 50,
        documento: "1838764",
        tipoDocumento: 3,
        codigo: "31838764",
        nombres: "Giffy",
        apellidos: "Dunphy",
        fechaNacimiento: new Date(1973, 3, 18)
      }
    ];

    let productos: IProducto[] = [
      {
        id: 1,
        codigo: "004124001653576",
        nombre: "massa",
        tecnologia: "Oba"
      }, {
        id: 2,
        codigo: "477469503509490",
        nombre: "est",
        tecnologia: "Fatz"
      }, {
        id: 3,
        codigo: "471874486101448",
        nombre: "lacus at",
        tecnologia: "Fatz"
      }, {
        id: 4,
        codigo: "666904774345901",
        nombre: "maecenas",
        tecnologia: "Kazio"
      }, {
        id: 5,
        codigo: "170654684579982",
        nombre: "parturient montes",
        tecnologia: "Voomm"
      }, {
        id: 6,
        codigo: "597876131645951",
        nombre: "parturient montes",
        tecnologia: "Dablist"
      }, {
        id: 7,
        codigo: "400779061489125",
        nombre: "est quam",
        tecnologia: "Meetz"
      }, {
        id: 8,
        codigo: "074520550745234",
        nombre: "convallis nulla",
        tecnologia: "Mynte"
      }, {
        id: 9,
        codigo: "349084366991484",
        nombre: "eleifend quam",
        tecnologia: "Jetpulse"
      }, {
        id: 10,
        codigo: "695643823943634",
        nombre: "amet",
        tecnologia: "Eidel"
      }, {
        id: 11,
        codigo: "899380263754859",
        nombre: "est risus",
        tecnologia: "Photobean"
      }, {
        id: 12,
        codigo: "811090145898745",
        nombre: "non ligula",
        tecnologia: "Kwideo"
      }, {
        id: 13,
        codigo: "889835907587825",
        nombre: "nibh in",
        tecnologia: "Meevee"
      }, {
        id: 14,
        codigo: "015879463351985",
        nombre: "nulla suspendisse",
        tecnologia: "Twitterbridge"
      }, {
        id: 15,
        codigo: "243940534699279",
        nombre: "vestibulum ante",
        tecnologia: "Gigazoom"
      }, {
        id: 16,
        codigo: "012703658940749",
        nombre: "lacinia eget",
        tecnologia: "Flashspan"
      }, {
        id: 17,
        codigo: "357921138700306",
        nombre: "cum sociis",
        tecnologia: "Minyx"
      }, {
        id: 18,
        codigo: "780435112495710",
        nombre: "sapien",
        tecnologia: "Bubblemix"
      }, {
        id: 19,
        codigo: "733597828162821",
        nombre: "aenean fermentum",
        tecnologia: "Oozz"
      }, {
        id: 20,
        codigo: "381396830352990",
        nombre: "ut",
        tecnologia: "Edgeblab"
      }, {
        id: 21,
        codigo: "982829019591866",
        nombre: "varius",
        tecnologia: "Dynabox"
      }, {
        id: 22,
        codigo: "771914324659738",
        nombre: "vel",
        tecnologia: "Feednation"
      }, {
        id: 23,
        codigo: "534565026366878",
        nombre: "ut",
        tecnologia: "Katz"
      }, {
        id: 24,
        codigo: "134098392633349",
        nombre: "pede malesuada",
        tecnologia: "Jaxspan"
      }, {
        id: 25,
        codigo: "886230331254361",
        nombre: "eget",
        tecnologia: "Jayo"
      }, {
        id: 26,
        codigo: "062930140705143",
        nombre: "aenean lectus",
        tecnologia: "Jayo"
      }, {
        id: 27,
        codigo: "349898669059318",
        nombre: "ac diam",
        tecnologia: "Dabjam"
      }, {
        id: 28,
        codigo: "700177311196016",
        nombre: "ante ipsum",
        tecnologia: "Dabvine"
      }, {
        id: 29,
        codigo: "697493642256106",
        nombre: "sit amet",
        tecnologia: "Oodoo"
      }, {
        id: 30,
        codigo: "777306448935339",
        nombre: "velit eu",
        tecnologia: "Podcat"
      }, {
        id: 31,
        codigo: "924665084169236",
        nombre: "erat",
        tecnologia: "Kwilith"
      }, {
        id: 32,
        codigo: "318289316808517",
        nombre: "in purus",
        tecnologia: "Tambee"
      }, {
        id: 33,
        codigo: "149413333860311",
        nombre: "pretium nisl",
        tecnologia: "Realpoint"
      }, {
        id: 34,
        codigo: "897114578341490",
        nombre: "nulla",
        tecnologia: "Photobean"
      }, {
        id: 35,
        codigo: "603847974872890",
        nombre: "ultrices aliquet",
        tecnologia: "Pixoboo"
      }, {
        id: 36,
        codigo: "202801303150662",
        nombre: "lacus purus",
        tecnologia: "Yodel"
      }, {
        id: 37,
        codigo: "779646266355535",
        nombre: "tincidunt",
        tecnologia: "Yacero"
      }, {
        id: 38,
        codigo: "248743081325421",
        nombre: "in",
        tecnologia: "Buzzdog"
      }, {
        id: 39,
        codigo: "753066424118977",
        nombre: "vivamus tortor",
        tecnologia: "Dynabox"
      }, {
        id: 40,
        codigo: "779003952986200",
        nombre: "suscipit ligula",
        tecnologia: "Kwimbee"
      }, {
        id: 41,
        codigo: "319494610343767",
        nombre: "pulvinar",
        tecnologia: "Fiveclub"
      }, {
        id: 42,
        codigo: "859197165989447",
        nombre: "aenean",
        tecnologia: "Kare"
      }, {
        id: 43,
        codigo: "110836206748595",
        nombre: "nullam molestie",
        tecnologia: "Browsecat"
      }, {
        id: 44,
        codigo: "327883442578205",
        nombre: "in est",
        tecnologia: "Teklist"
      }, {
        id: 45,
        codigo: "447244435065236",
        nombre: "praesent lectus",
        tecnologia: "Zoombeat"
      }, {
        id: 46,
        codigo: "663065791319407",
        nombre: "a pede",
        tecnologia: "Chatterbridge"
      }, {
        id: 47,
        codigo: "303281960982283",
        nombre: "primis",
        tecnologia: "Flashpoint"
      }, {
        id: 48,
        codigo: "486372993039198",
        nombre: "at dolor",
        tecnologia: "Kaymbo"
      }, {
        id: 49,
        codigo: "888317507121357",
        nombre: "in",
        tecnologia: "Fliptune"
      }, {
        id: 50,
        codigo: "640559368345801",
        nombre: "praesent",
        tecnologia: "Yamia"
      }
    ];

    let contratos: Array<IContrato> = [
      {
        id: 1,
        numero: "0078675",
        fecha: new Date(2015, 11, 5),
        descripcion: "",
        idCliente: 5,
        cliente: clientes.find(cliente => cliente.id == 5),
        idProducto: 6,
        producto: productos.find(producto => producto.id == 6)
      },
      {
        id: 2,
        numero: "0078676",
        fecha: new Date(2020, 10, 7),
        descripcion: "",
        idCliente: 4,
        cliente: clientes.find(cliente => cliente.id == 4),
        idProducto: 2,
        producto: productos.find(producto => producto.id == 2)
      },
      {
        id: 3,
        numero: "0078677",
        fecha: new Date(2021, 3, 2),
        descripcion: "",
        idCliente: 2,
        cliente: clientes.find(cliente => cliente.id == 2),
        idProducto: 1,
        producto: productos.find(producto => producto.id == 1)
      },
      {
        id: 4,
        numero: "0078678",
        fecha: new Date(2016, 4, 20),
        descripcion: "",
        idCliente: 10,
        cliente: clientes.find(cliente => cliente.id == 10),
        idProducto: 7,
        producto: productos.find(producto => producto.id == 7)
      },
      {
        id: 5,
        numero: "0078679",
        fecha: new Date(2019, 9, 15),
        descripcion: "",
        idCliente: 9,
        cliente: clientes.find(cliente => cliente.id == 9),
        idProducto: 7,
        producto: productos.find(producto => producto.id == 7)
      }
    ];

    let reclamos: IReclamo[] = [{
      id: 1,
      codigo: "254749400714867",
      motivo: 2,
      fecha: new Date(2020, 2, 13),
      descripcion: "erat nulla tempus vivamus in felis eu sapien",
      estado: 3,
      fechaSolucion: new Date(2020, 4, 15),
      descripcionSolucion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      idCliente: 10,
      cliente: clientes.find(cliente => cliente.id == 10),
      idProducto: 18,
      producto: productos.find(producto => producto.id == 18)
    }, {
      id: 2,
      codigo: "870649325183719",
      motivo: 3,
      fecha: new Date(2017, 12, 24),
      descripcion: "vestibulum sed magna at nunc commodo placerat praesent blandit",
      estado: 1,
      idCliente: 26,
      cliente: clientes.find(cliente => cliente.id == 26),
      idProducto: 23,
      producto: productos.find(producto => producto.id == 23)
    }, {
      id: 3,
      codigo: "004191191010727",
      motivo: 3,
      fecha: new Date(2017, 1, 29),
      descripcion: "lacinia sapien quis libero nullam sit",
      estado: 2,
      idCliente: 29,
      cliente: clientes.find(cliente => cliente.id == 29),
      idProducto: 32,
      producto: productos.find(producto => producto.id == 32)
    }, {
      id: 4,
      codigo: "881304720011500",
      motivo: 3,
      fecha: new Date(2018, 8, 17),
      descripcion: "in quam fringilla rhoncus mauris enim leo",
      estado: 1,
      idCliente: 17,
      cliente: clientes.find(cliente => cliente.id == 17),
      idProducto: 18,
      producto: productos.find(producto => producto.id == 18)
    }, {
      id: 5,
      codigo: "815123861992803",
      motivo: 2,
      fecha: new Date(2017, 6, 17),
      descripcion: "erat tortor sollicitudin mi sit",
      estado: 2,
      idCliente: 19,
      cliente: clientes.find(cliente => cliente.id == 19),
      idProducto: 5,
      producto: productos.find(producto => producto.id == 5)
    }, {
      id: 6,
      codigo: "199752397244754",
      motivo: 3,
      fecha: new Date(2018, 6, 12),
      descripcion: "nullam sit amet turpis elementum ligula",
      estado: 2,
      idCliente: 44,
      cliente: clientes.find(cliente => cliente.id == 44),
      idProducto: 44,
      producto: productos.find(producto => producto.id == 44)
    }, {
      id: 7,
      codigo: "711658624326023",
      motivo: 1,
      fecha: new Date(2017, 9, 9),
      descripcion: "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur",
      estado: 1,
      idCliente: 32,
      cliente: clientes.find(cliente => cliente.id == 32),
      idProducto: 24,
      producto: productos.find(producto => producto.id == 24)
    }, {
      id: 8,
      codigo: "372774484158141",
      motivo: 3,
      fecha: new Date(2019, 2, 8),
      descripcion: "in faucibus orci luctus et",
      estado: 1,
      idCliente: 49,
      cliente: clientes.find(cliente => cliente.id == 49),
      idProducto: 15,
      producto: productos.find(producto => producto.id == 15)
    }, {
      id: 9,
      codigo: "117266875625618",
      motivo: 3,
      fecha: new Date(2018, 11, 14),
      descripcion: "ligula suspendisse ornare consequat lectus in est risus auctor",
      estado: 2,
      idCliente: 11,
      cliente: clientes.find(cliente => cliente.id == 11),
      idProducto: 39,
      producto: productos.find(producto => producto.id == 39)
    }, {
      id: 10,
      codigo: "705208217843313",
      motivo: 2,
      fecha: new Date(2018, 11, 29),
      descripcion: "sed tristique in tempus sit amet sem",
      estado: 1,
      idCliente: 24,
      cliente: clientes.find(cliente => cliente.id == 24),
      idProducto: 29,
      producto: productos.find(producto => producto.id == 29)
    }, {
      id: 11,
      codigo: "422431185206268",
      motivo: 1,
      fecha: new Date(2021, 2, 1),
      descripcion: "maecenas leo odio condimentum id luctus nec molestie sed justo",
      estado: 2,
      idCliente: 21,
      cliente: clientes.find(cliente => cliente.id == 21),
      idProducto: 32,
      producto: productos.find(producto => producto.id == 32)
    }, {
      id: 12,
      codigo: "749489890942896",
      motivo: 1,
      fecha: new Date(2019, 3, 12),
      descripcion: "luctus ultricies eu nibh quisque id justo sit amet sapien",
      estado: 2,
      idCliente: 26,
      cliente: clientes.find(cliente => cliente.id == 26),
      idProducto: 18,
      producto: productos.find(producto => producto.id == 18)
    }, {
      id: 13,
      codigo: "526142535720527",
      motivo: 2,
      fecha: new Date(2018, 5, 14),
      descripcion: "ut tellus nulla ut erat id mauris",
      estado: 2,
      idCliente: 14,
      cliente: clientes.find(cliente => cliente.id == 14),
      idProducto: 41,
      producto: productos.find(producto => producto.id == 41)
    }, {
      id: 14,
      codigo: "226745368579364",
      motivo: 3,
      fecha: new Date(2019, 1, 10),
      descripcion: "in blandit ultrices enim lorem ipsum",
      estado: 2,
      idCliente: 45,
      cliente: clientes.find(cliente => cliente.id == 45),
      idProducto: 9,
      producto: productos.find(producto => producto.id == 9)
    }, {
      id: 15,
      codigo: "811728135029953",
      motivo: 3,
      fecha: new Date(2018, 8, 31),
      descripcion: "vel accumsan tellus nisi eu orci mauris lacinia sapien",
      estado: 2,
      idCliente: 11,
      cliente: clientes.find(cliente => cliente.id == 11),
      idProducto: 43,
      producto: productos.find(producto => producto.id == 43)
    }, {
      id: 16,
      codigo: "260553190022028",
      motivo: 1,
      fecha: new Date(2019, 4, 24),
      descripcion: "lectus in quam fringilla rhoncus mauris",
      estado: 2,
      idCliente: 33,
      cliente: clientes.find(cliente => cliente.id == 33),
      idProducto: 2,
      producto: productos.find(producto => producto.id == 2)
    }, {
      id: 17,
      codigo: "703865754021631",
      motivo: 3,
      fecha: new Date(2018, 6, 12),
      descripcion: "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum",
      estado: 2,
      idCliente: 28,
      cliente: clientes.find(cliente => cliente.id == 28),
      idProducto: 37,
      producto: productos.find(producto => producto.id == 37)
    }, {
      id: 18,
      codigo: "290806174012789",
      motivo: 2,
      fecha: new Date(2018, 6, 20),
      descripcion: "rutrum rutrum neque aenean auctor gravida sem praesent id",
      estado: 2,
      idCliente: 32,
      cliente: clientes.find(cliente => cliente.id == 32),
      idProducto: 49,
      producto: productos.find(producto => producto.id == 49)
    }, {
      id: 19,
      codigo: "638503444146473",
      motivo: 3,
      fecha: new Date(2019, 1, 8),
      descripcion: "molestie sed justo pellentesque viverra pede",
      estado: 1,
      idCliente: 33,
      cliente: clientes.find(cliente => cliente.id == 33),
      idProducto: 9,
      producto: productos.find(producto => producto.id == 9)
    }, {
      id: 20,
      codigo: "795958395095497",
      motivo: 2,
      fecha: new Date(2017, 10, 14),
      descripcion: "suspendisse potenti nullam porttitor lacus",
      estado: 1,
      idCliente: 10,
      cliente: clientes.find(cliente => cliente.id == 10),
      idProducto: 37,
      producto: productos.find(producto => producto.id == 37)
    }, {
      id: 21,
      codigo: "111215776540982",
      motivo: 1,
      fecha: new Date(2017, 3, 29),
      descripcion: "neque sapien placerat ante nulla justo aliquam quis turpis",
      estado: 2,
      idCliente: 18,
      cliente: clientes.find(cliente => cliente.id == 18),
      idProducto: 1,
      producto: productos.find(producto => producto.id == 1)
    }, {
      id: 22,
      codigo: "671115928871072",
      motivo: 1,
      fecha: new Date(2017, 6, 14),
      descripcion: "turpis integer aliquet massa id lobortis convallis tortor risus",
      estado: 2,
      idCliente: 19,
      cliente: clientes.find(cliente => cliente.id == 19),
      idProducto: 22,
      producto: productos.find(producto => producto.id == 22)
    }, {
      id: 23,
      codigo: "625964094276831",
      motivo: 3,
      fecha: new Date(2018, 2, 26),
      descripcion: "turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
      estado: 1,
      idCliente: 26,
      cliente: clientes.find(cliente => cliente.id == 26),
      idProducto: 11,
      producto: productos.find(producto => producto.id == 11)
    }, {
      id: 24,
      codigo: "662356581189724",
      motivo: 2,
      fecha: new Date(2020, 3, 20),
      descripcion: "rutrum rutrum neque aenean auctor gravida sem praesent id massa",
      estado: 2,
      idCliente: 44,
      cliente: clientes.find(cliente => cliente.id == 44),
      idProducto: 19,
      producto: productos.find(producto => producto.id == 19)
    }, {
      id: 25,
      codigo: "876615318046602",
      motivo: 1,
      fecha: new Date(2020, 9, 7),
      descripcion: "felis donec semper sapien a libero nam dui proin",
      estado: 1,
      idCliente: 29,
      cliente: clientes.find(cliente => cliente.id == 29),
      idProducto: 36,
      producto: productos.find(producto => producto.id == 36)
    }, {
      id: 26,
      codigo: "914567173385293",
      motivo: 1,
      fecha: new Date(2018, 12, 25),
      descripcion: "vulputate ut ultrices vel augue vestibulum ante ipsum primis",
      estado: 2,
      idCliente: 48,
      cliente: clientes.find(cliente => cliente.id == 48),
      idProducto: 29,
      producto: productos.find(producto => producto.id == 29)
    }, {
      id: 27,
      codigo: "832625822180187",
      motivo: 2,
      fecha: new Date(2018, 7, 18),
      descripcion: "ligula sit amet eleifend pede libero quis",
      estado: 2,
      idCliente: 42,
      cliente: clientes.find(cliente => cliente.id == 42),
      idProducto: 15,
      producto: productos.find(producto => producto.id == 15)
    }, {
      id: 28,
      codigo: "666097089850260",
      motivo: 1,
      fecha: new Date(2017, 2, 22),
      descripcion: "ac nulla sed vel enim sit amet",
      estado: 2,
      idCliente: 34,
      cliente: clientes.find(cliente => cliente.id == 34),
      idProducto: 46,
      producto: productos.find(producto => producto.id == 46)
    }, {
      id: 29,
      codigo: "258364558221838",
      motivo: 3,
      fecha: new Date(2020, 8, 8),
      descripcion: "amet nunc viverra dapibus nulla suscipit ligula",
      estado: 2,
      idCliente: 5,
      cliente: clientes.find(cliente => cliente.id == 5),
      idProducto: 6,
      producto: productos.find(producto => producto.id == 6)
    }, {
      id: 30,
      codigo: "721345637500988",
      motivo: 2,
      fecha: new Date(2020, 12, 11),
      descripcion: "venenatis non sodales sed tincidunt eu felis fusce posuere",
      estado: 2,
      idCliente: 42,
      cliente: clientes.find(cliente => cliente.id == 42),
      idProducto: 23,
      producto: productos.find(producto => producto.id == 23)
    }, {
      id: 31,
      codigo: "755577030282682",
      motivo: 3,
      fecha: new Date(2020, 11, 7),
      descripcion: "odio cras mi pede malesuada in",
      estado: 2,
      idCliente: 24,
      cliente: clientes.find(cliente => cliente.id == 24),
      idProducto: 30,
      producto: productos.find(producto => producto.id == 30)
    }, {
      id: 32,
      codigo: "594905205080619",
      motivo: 2,
      fecha: new Date(2020, 12, 12),
      descripcion: "tortor risus dapibus augue vel accumsan tellus",
      estado: 2,
      idCliente: 17,
      cliente: clientes.find(cliente => cliente.id == 17),
      idProducto: 28,
      producto: productos.find(producto => producto.id == 28)
    }, {
      id: 33,
      codigo: "851119156390795",
      motivo: 2,
      fecha: new Date(2017, 10, 10),
      descripcion: "justo maecenas rhoncus aliquam lacus",
      estado: 1,
      idCliente: 48,
      cliente: clientes.find(cliente => cliente.id == 48),
      idProducto: 8,
      producto: productos.find(producto => producto.id == 8)
    }, {
      id: 34,
      codigo: "038053415106819",
      motivo: 3,
      fecha: new Date(2020, 6, 8),
      descripcion: "phasellus in felis donec semper sapien",
      estado: 2,
      idCliente: 47,
      cliente: clientes.find(cliente => cliente.id == 47),
      idProducto: 20,
      producto: productos.find(producto => producto.id == 20)
    }, {
      id: 35,
      codigo: "382056271277619",
      motivo: 2,
      fecha: new Date(2017, 9, 7),
      descripcion: "semper interdum mauris ullamcorper purus sit",
      estado: 2,
      idCliente: 1,
      cliente: clientes.find(cliente => cliente.id == 1),
      idProducto: 9,
      producto: productos.find(producto => producto.id == 9)
    }, {
      id: 36,
      codigo: "494042825408434",
      motivo: 3,
      fecha: new Date(2019, 3, 24),
      descripcion: "neque duis bibendum morbi non quam nec dui luctus",
      estado: 1,
      idCliente: 17,
      cliente: clientes.find(cliente => cliente.id == 17),
      idProducto: 1,
      producto: productos.find(producto => producto.id == 1)
    }, {
      id: 37,
      codigo: "480716233975767",
      motivo: 2,
      fecha: new Date(2017, 11, 26),
      descripcion: "platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
      estado: 2,
      idCliente: 21,
      cliente: clientes.find(cliente => cliente.id == 21),
      idProducto: 44,
      producto: productos.find(producto => producto.id == 44)
    }, {
      id: 38,
      codigo: "986167650794923",
      motivo: 2,
      fecha: new Date(2019, 8, 1),
      descripcion: "eget massa tempor convallis nulla neque libero",
      estado: 2,
      idCliente: 6,
      cliente: clientes.find(cliente => cliente.id == 6),
      idProducto: 28,
      producto: productos.find(producto => producto.id == 28)
    }, {
      id: 39,
      codigo: "069790406851301",
      motivo: 1,
      fecha: new Date(2018, 3, 19),
      descripcion: "sit amet consectetuer adipiscing elit proin interdum mauris non ligula",
      estado: 2,
      idCliente: 35,
      cliente: clientes.find(cliente => cliente.id == 35),
      idProducto: 6,
      producto: productos.find(producto => producto.id == 6)
    }, {
      id: 40,
      codigo: "300556788069275",
      motivo: 1,
      fecha: new Date(2019, 11, 20),
      descripcion: "sollicitudin mi sit amet lobortis sapien sapien",
      estado: 2,
      idCliente: 39,
      cliente: clientes.find(cliente => cliente.id == 39),
      idProducto: 22,
      producto: productos.find(producto => producto.id == 22)
    }, {
      id: 41,
      codigo: "201015660127756",
      motivo: 1,
      fecha: new Date(2018, 6, 19),
      descripcion: "cras in purus eu magna",
      estado: 2,
      idCliente: 47,
      cliente: clientes.find(cliente => cliente.id == 47),
      idProducto: 13,
      producto: productos.find(producto => producto.id == 13)
    }, {
      id: 42,
      codigo: "341846109421732",
      motivo: 1,
      fecha: new Date(2017, 9, 12),
      descripcion: "justo pellentesque viverra pede ac diam cras pellentesque",
      estado: 1,
      idCliente: 35,
      cliente: clientes.find(cliente => cliente.id == 35),
      idProducto: 48,
      producto: productos.find(producto => producto.id == 48)
    }, {
      id: 43,
      codigo: "848054808556387",
      motivo: 2,
      fecha: new Date(2020, 7, 29),
      descripcion: "est et tempus semper est quam pharetra magna ac",
      estado: 2,
      idCliente: 25,
      cliente: clientes.find(cliente => cliente.id == 25),
      idProducto: 13,
      producto: productos.find(producto => producto.id == 13)
    }, {
      id: 44,
      codigo: "373118454820183",
      motivo: 1,
      fecha: new Date(2021, 1, 29),
      descripcion: "augue vestibulum rutrum rutrum neque aenean auctor gravida",
      estado: 2,
      idCliente: 47,
      cliente: clientes.find(cliente => cliente.id == 47),
      idProducto: 7,
      producto: productos.find(producto => producto.id == 7)
    }, {
      id: 45,
      codigo: "220356240188617",
      motivo: 3,
      fecha: new Date(2021, 3, 14),
      descripcion: "proin at turpis a pede",
      estado: 2,
      idCliente: 18,
      cliente: clientes.find(cliente => cliente.id == 18),
      idProducto: 36,
      producto: productos.find(producto => producto.id == 36)
    }, {
      id: 46,
      codigo: "586724148977817",
      motivo: 1,
      fecha: new Date(2020, 3, 13),
      descripcion: "mauris enim leo rhoncus sed vestibulum sit amet cursus",
      estado: 2,
      idCliente: 16,
      cliente: clientes.find(cliente => cliente.id == 16),
      idProducto: 32,
      producto: productos.find(producto => producto.id == 32)
    }, {
      id: 47,
      codigo: "946900922115645",
      motivo: 1,
      fecha: new Date(2020, 12, 14),
      descripcion: "molestie lorem quisque ut erat",
      estado: 1,
      idCliente: 7,
      cliente: clientes.find(cliente => cliente.id == 7),
      idProducto: 15,
      producto: productos.find(producto => producto.id == 15)
    }, {
      id: 48,
      codigo: "319924162492024",
      motivo: 1,
      fecha: new Date(2020, 4, 12),
      descripcion: "leo odio condimentum id luctus nec molestie sed justo",
      estado: 2,
      idCliente: 17,
      cliente: clientes.find(cliente => cliente.id == 17),
      idProducto: 3,
      producto: productos.find(producto => producto.id == 3)
    }, {
      id: 49,
      codigo: "905788580245200",
      motivo: 2,
      fecha: new Date(2020, 1, 5),
      descripcion: "nunc donec quis orci eget orci vehicula condimentum",
      estado: 2,
      idCliente: 8,
      cliente: clientes.find(cliente => cliente.id == 8),
      idProducto: 25,
      producto: productos.find(producto => producto.id == 25)
    }, {
      id: 50,
      codigo: "322781434369117",
      motivo: 3,
      fecha: new Date(2020, 11, 8),
      descripcion: "diam vitae quam suspendisse potenti nullam porttitor lacus at turpis",
      estado: 2,
      fechaSolucion: new Date(2020, 11, 15),
      descripcionSolucion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      idCliente: 40,
      cliente: clientes.find(cliente => cliente.id == 40),
      idProducto: 49,
      producto: productos.find(producto => producto.id == 49)
    }];

    return { clientes, productos, contratos, reclamos };
  }
}
