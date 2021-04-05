import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { MainComponent } from './main/main.component';
import { ReclamosComponent } from './reclamos/reclamos.component';
import { ContratosComponent } from './contratos/contratos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddContratoComponent } from './add-contrato/add-contrato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContratoDetailsComponent } from './contrato-details/contrato-details.component';
import { AddReclamoComponent } from './add-reclamo/add-reclamo.component';
import { UpdateStateReclamoComponent } from './update-state-reclamo/update-state-reclamo.component';
import { FindByIdPipe } from '../pipes/find-by-id.pipe';
import { InfoComponent } from './info/info.component';
import { FindByFieldPipe } from '../pipes/find-by-field.pipe';
import { ReclamoDetailsComponent } from './reclamo-details/reclamo-details.component';

@NgModule({
  declarations: [
    MainComponent,
    ContratosComponent,
    ReclamosComponent,
    NavbarComponent,
    SidebarComponent,
    AddContratoComponent,
    ContratoDetailsComponent,
    AddReclamoComponent,
    UpdateStateReclamoComponent,
    InfoComponent,
    FindByIdPipe,
    FindByFieldPipe,
    ReclamoDetailsComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    ReactiveFormsModule,
  ]
})
export class GeneralModule { }
