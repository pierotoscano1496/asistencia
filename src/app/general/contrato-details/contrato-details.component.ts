import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Contrato from 'src/app/models/Contrato';
import { ContratoService } from 'src/app/services/contrato.service';

@Component({
  selector: 'app-contrato-details',
  templateUrl: './contrato-details.component.html',
  styleUrls: ['./contrato-details.component.scss']
})
export class ContratoDetailsComponent implements OnInit {
  private _contrato!: Contrato;

  constructor(private contratoService: ContratoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params["id"];
    this.contratoService.findById(id).subscribe(data => this._contrato = new Contrato(data));
  }

  /**
   * Getter contrato
   * @return {Contrato}
   */
  public get contrato(): Contrato {
    return this._contrato;
  }

  /**
   * Setter contrato
   * @param {Contrato} value
   */
  public set contrato(value: Contrato) {
    this._contrato = value;
  }

}
