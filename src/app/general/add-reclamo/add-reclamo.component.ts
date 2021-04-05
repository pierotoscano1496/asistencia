import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import Cliente from 'src/app/models/Cliente';
import IReclamo from 'src/app/models/interfaces/IReclamo';
import Producto from 'src/app/models/Producto';
import Reclamo from 'src/app/models/Reclamo';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ReclamoService } from 'src/app/services/reclamo.service';

@Component({
  selector: 'app-add-reclamo',
  templateUrl: './add-reclamo.component.html',
  styleUrls: ['./add-reclamo.component.scss']
})
export class AddReclamoComponent implements OnInit, AfterViewInit {
  @ViewChild("codCliente") txtCodCliente!: ElementRef;
  @ViewChild("codProducto") txtCodProducto!: ElementRef;
  @ViewChild("messageBoxFormState") modalMessageBoxFormState!: ElementRef;

  formAddReclamo: FormGroup;
  state: boolean = false;

  private _listClientesToSearch: Cliente[];
  private _listProductosToSearch: Producto[];

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private router: Router, private reclamoService: ReclamoService, private clienteService: ClienteService, private productoService: ProductoService) {
    this.formAddReclamo = this.formBuilder.group({
      codigo: null,
      motivo: 0,
      fecha: new Date(),
      descripcion: null,
      cliente: 0,
      producto: 0,

    });
    this._listClientesToSearch = [];
    this._listProductosToSearch = [];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.txtCodCliente.nativeElement, "keyup").pipe(debounceTime(1000)).subscribe(() => {
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
      //Buscar productos por codigo
      this.productoService.allByCodigoStartsWith(codProducto).subscribe(data => {
        this._listProductosToSearch = [];
        data.forEach(producto => {
          this._listProductosToSearch.push(new Producto(producto));
        });
      });
    });
  }

  addReclamo() {
    const reclamo: IReclamo = {
      codigo: this.formAddReclamo.controls.codigo.value,
      motivo: this.formAddReclamo.controls.motivo.value,
      fecha: this.formAddReclamo.controls.fecha.value,
      descripcion: this.formAddReclamo.controls.descripcion.value,
      estado: 1,
      idCliente: this.formAddReclamo.controls.cliente.value,
      idProducto: this.formAddReclamo.controls.producto.value
    };

    this.reclamoService.add(reclamo).subscribe(data => {
      const reclamoAdded: Reclamo = new Reclamo(data);
      this.state = reclamoAdded.id! > 0;
      this.modalService.open(this.modalMessageBoxFormState);
    })
  }

  finishRegistration() {
    if (this.state) {
      this.router.navigate(["/main/reclamos"]);
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
