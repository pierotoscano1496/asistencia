import { TestBed } from '@angular/core/testing';

import { AsistenciaInMemDbService } from './asistencia-in-mem-db.service';

describe('AsistenciaInMemDbService', () => {
  let service: AsistenciaInMemDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsistenciaInMemDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
