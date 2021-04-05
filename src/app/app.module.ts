import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './principal/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralModule } from './general/general.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AsistenciaInMemDbService } from './services/mem-data/asistencia-in-mem-db.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    GeneralModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AsistenciaInMemDbService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
