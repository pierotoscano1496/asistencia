import { Component, OnInit } from '@angular/core';
import Contrato from 'src/app/models/Contrato';
import IContrato from 'src/app/models/interfaces/IContrato';
import { ContratoService } from 'src/app/services/contrato.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {
  private _listContratos: Array<Contrato>;

  constructor(private contratoService: ContratoService) {
    this._listContratos = new Array<Contrato>();
  }

  ngOnInit(): void {
    this.contratoService.all().subscribe(data => {
      console.log(data);
      this._listContratos = [];
      data.forEach(contrato => {
        this._listContratos.push(new Contrato(contrato));
      });
    });
  }

  /**
   * Getter listContratos
   * @return {Array<Contrato>}
   */
  public get listContratos(): Array<Contrato> {
    return this._listContratos;
  }

  /**
   * Setter listContratos
   * @param {Array<Contrato>} value
   */
  public set listContratos(value: Array<Contrato>) {
    this._listContratos = value;
  }
}
