import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import Cliente from 'src/app/models/Cliente';
import Contrato from 'src/app/models/Contrato';
import IContrato from 'src/app/models/interfaces/IContrato';
import Producto from 'src/app/models/Producto';
import { ClienteService } from 'src/app/services/cliente.service';
import { ContratoService } from 'src/app/services/contrato.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-contrato',
  templateUrl: './add-contrato.component.html',
  styleUrls: ['./add-contrato.component.scss']
})
export class AddContratoComponent implements OnInit, AfterViewInit {
  @ViewChild("codCliente") txtCodCliente!: ElementRef;
  @ViewChild("codProducto") txtCodProducto!: ElementRef;
  @ViewChild("messageBoxFormState") modalMessageBoxFormState!: ElementRef;

  formAddContrato: FormGroup;
  state: boolean = false;

  private _listClientesToSearch: Cliente[];
  private _listProductosToSearch: Producto[];

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private contratoService: ContratoService, private clienteService: ClienteService, private productoService: ProductoService, private router: Router) {
    this.formAddContrato = this.formBuilder.group({
      numero: null,
      fecha: new Date(),
      producto: 0,
      cliente: 0,
      descripcion: null
    });
    this._listClientesToSearch = [];
    this._listProductosToSearch = [];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.txtCodCliente.nativeElement, 'keyup').pipe(debounceTime(1000)).subscribe(() => {
      const codCliente: string = (this.txtCodCliente.nativeElement as HTMLInputElement).value;
      //Buscar clientes por codigo
      this.clienteService.allByCodigoStartsWith(codCliente).subscribe(data => {
        this._listClientesToSearch = [];
        data.forEach(cliente => {
          this._listClientesToSearch.push(new Cliente(cliente));
        });
      });
    });

    fromEvent(this.txtCodProducto.nativeElement, "keyup").pipe(debounceTime(1000)).subscribe(() => {
      const codProducto: string = (this.txtCodProducto.nativeElement as HTMLInputElement).value;
      //Buscar producto por codigo
      this.productoService.allByCodigoStartsWith(codProducto).subscribe(data => {
        this._listProductosToSearch = [];
        data.forEach(producto => {
          this._listProductosToSearch.push(new Producto(producto));
        });
      });
    });
  }

  addContrato() {
    const contrato: IContrato = {
      numero: this.formAddContrato.controls.numero.value,
      fecha: this.formAddContrato.controls.fecha.value,
      descripcion: this.formAddContrato.controls.descripcion.value,
      idCliente: this.formAddContrato.controls.cliente.value,
      idProducto: this.formAddContrato.controls.producto.value
    };

    this.contratoService.add(contrato).subscribe(data => {
      const contratoAdded: Contrato = new Contrato(data);
      this.state = contratoAdded.id! > 0;
      this.modalService.open(this.modalMessageBoxFormState);
    });
  }

  finishRegistration(): void {
    if (this.state) {
      this.router.navigate(["/main/contratos"]);
    }
  }

  /**
   * Getter listClientesToSearch
   * @return {Cliente[]}
   */
  public get listClientesToSearch(): Cliente[] {
    return this._listClientesToSearch;
  }

  /**
   * Getter listProductosToSearch
   * @return {Producto[]}
   */
  public get listProductosToSearch(): Producto[] {
    return this._listProductosToSearch;
  }

  /**
   * Setter listClientesToSearch
   * @param {Cliente[]} value
   */
  public set listClientesToSearch(value: Cliente[]) {
    this._listClientesToSearch = value;
  }

  /**
   * Setter listProductosToSearch
   * @param {Producto[]} value
   */
  public set listProductosToSearch(value: Producto[]) {
    this._listProductosToSearch = value;
  }

}
