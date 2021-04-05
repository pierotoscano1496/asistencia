import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContratoComponent } from './add-contrato/add-contrato.component';
import { AddReclamoComponent } from './add-reclamo/add-reclamo.component';
import { ContratoDetailsComponent } from './contrato-details/contrato-details.component';
import { ContratosComponent } from './contratos/contratos.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';
import { ReclamoDetailsComponent } from './reclamo-details/reclamo-details.component';
import { ReclamosComponent } from './reclamos/reclamos.component';
import { UpdateStateReclamoComponent } from './update-state-reclamo/update-state-reclamo.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [
      { path: 'info', component: InfoComponent },
      { path: 'contratos', component: ContratosComponent },
      { path: 'contratos/:id', component: ContratoDetailsComponent },
      { path: 'add-contrato', component: AddContratoComponent },
      { path: 'reclamos', component: ReclamosComponent },
      { path: 'reclamos/:id', component: ReclamoDetailsComponent },
      { path: 'reclamos/update-state/:id', component: UpdateStateReclamoComponent },
      { path: 'add-reclamo', component: AddReclamoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
