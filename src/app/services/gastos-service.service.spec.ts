import { TestBed, inject } from '@angular/core/testing';

import { GastosServiceService } from './gastos-service.service';

describe('GastosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GastosServiceService]
    });
  });

  it('should be created', inject([GastosServiceService], (service: GastosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
