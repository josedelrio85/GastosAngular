import { TestBed, inject } from '@angular/core/testing';

import { TiposMovimientoService } from './tipos-movimiento-service.service';

describe('TiposMovimientoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiposMovimientoService]
    });
  });

  it('should be created', inject([TiposMovimientoService], (service: TiposMovimientoService) => {
    expect(service).toBeTruthy();
  }));
});
