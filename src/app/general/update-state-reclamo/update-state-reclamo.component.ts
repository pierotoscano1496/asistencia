import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import IReclamo from 'src/app/models/interfaces/IReclamo';
import Reclamo from 'src/app/models/Reclamo';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { Estado, Motivo } from '../Resources';

@Component({
  selector: 'app-update-state-reclamo',
  templateUrl: './update-state-reclamo.component.html',
  styleUrls: ['./update-state-reclamo.component.scss']
})
export class UpdateStateReclamoComponent implements OnInit {
  @ViewChild("messageBoxFormState") messageBoxFormState!: ElementRef
  private _reclamo!: Reclamo;

  motivos: Motivo[] = [
    { tipo: 1, descripcion: "Queja" },
    { tipo: 2, descripcion: "Inconveniente" },
    { tipo: 3, descripcion: "Contrato" }
  ];

  estados: Estado[] = [
    { tipo: 1, descripcion: "En recepción" },
    { tipo: 2, descripcion: "En atención" },
    { tipo: 3, descripcion: "Atendido" }
  ]

  state: boolean = false;

  constructor(private reclamoService: ReclamoService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params["id"];
    this.reclamoService.findById(id).subscribe(data => {
      this._reclamo = new Reclamo(data);
    });
  }

  updateStateReclamo() {
    this._reclamo.estado += 1;

    const reclamo: IReclamo = {
      codigo: this._reclamo.codigo,
      motivo: this._reclamo.motivo,
      fecha: this._reclamo.fecha,
      descripcion: this._reclamo.descripcion,
      estado: this._reclamo.estado,
      idCliente: this._reclamo.idCliente,
      idProducto: this._reclamo.idProducto
    };

    this.reclamoService.update(this._reclamo.id, reclamo).subscribe(data => {
      if (data.id! > 0) this.state = true;
      this.modalService.open(this.messageBoxFormState);
    });
  }

  finishUpdate() {
    if (this.state) {
      this.router.navigate(["/main/reclamos"]);
    }
  }

  /**
   * Getter reclamo
   * @return {Reclamo}
   */
  public get reclamo(): Reclamo {
    return this._reclamo;
  }

  /**
   * Setter reclamo
   * @param {Reclamo} value
   */
  public set reclamo(value: Reclamo) {
    this._reclamo = value;
  }

}
