import { Component, OnInit } from '@angular/core';
import Reclamo from 'src/app/models/Reclamo';
import { ReclamoService } from 'src/app/services/reclamo.service';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.scss']
})
export class ReclamosComponent implements OnInit {
  private _listReclamos: Reclamo[];

  constructor(private reclamoService: ReclamoService) {
    this._listReclamos = [];
  }

  ngOnInit(): void {
    this.reclamoService.all().subscribe(data => {
      this._listReclamos = [];
      data.forEach(reclamo => {
        this._listReclamos.push(new Reclamo(reclamo));
      });
    });
  }

  /**
   * Getter listReclamos
   * @return {Array<Reclamo>}
   */
  public get listReclamos(): Array<Reclamo> {
    return this._listReclamos;
  }

  /**
   * Setter listReclamos
   * @param {Array<Reclamo>} value
   */
  public set listReclamos(value: Array<Reclamo>) {
    this._listReclamos = value;
  }

}
