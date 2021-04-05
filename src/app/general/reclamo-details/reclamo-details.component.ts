import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Reclamo from 'src/app/models/Reclamo';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { estados, motivos } from '../Resources';

@Component({
  selector: 'app-reclamo-details',
  templateUrl: './reclamo-details.component.html',
  styleUrls: ['./reclamo-details.component.scss']
})
export class ReclamoDetailsComponent implements OnInit {
  private _reclamo!: Reclamo;
  motivos = motivos;
  estados = estados;

  constructor(private reclamoService: ReclamoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params["id"];
    this.reclamoService.findById(id).subscribe(data => this._reclamo = new Reclamo(data));
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
